const createError = require('http-errors')
const { Model, Brand, sequelize } = require('../database/models');

class ModelController {
  getAllModels = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const models = await Model.findAll({
        attributes: ['id', 'title', 'brand_id', 'description'],
        limit,
        offset,
        raw: true,
      });
      if(!models) {
        return next(createError(404, 'Models not found!'));
      }
      res.status(200).json(models);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getModelById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const model = await Model.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'brand_id']
        },
        include: [
            {
                model: Brand,
                attributes: ['title']
            }
        ],
        raw: true,
      });
      if (!model) {
        return next(createError(404, 'Model not found!'));
      }
      res.status(200).json(model);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createModel = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { title, brand, description } = req.body;
      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      })
      const model = await Model.create({
        title,
        brand_id,
        description,
      }, {
        transaction: t,
        raw: true,
      });
      if(!model) {
        await t.rollback();
        return next(createError(404, 'Model not created!'));
      }
      await t.commit();
      res.status(201).json(model);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateModel = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id, title, brand, description } = req.body;
      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      })
      const model = await Model.update({
        title,
        brand_id,
        description
      }, {
        where: {
          id,
        },
        transaction: t,
        returning: ['id', 'title'],
        raw: true,
      });
      if (!model) {
        await t.rollback();
        return next(createError(404, 'Model not found!'));
      }
      await t.commit();
      res.status(200).json(model);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteModel = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedModel = await Model.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedModel) {
        await t.rollback();
        return next(createError(404, 'Model not found!'))
      }
      await t.commit();
      res.status(204).send();
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }
};

module.exports = new ModelController();