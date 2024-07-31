const createError = require('http-errors');
const { ItemCategory, Brand, sequelize } = require('../database/models');

class ItemCategoryController {
  getAllItemCategories = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const itemCategories = await ItemCategory.findAll({
        attributes: ['id', 'title'],
        limit,
        offset,
        include: [
          {
            model: Brand,
            attributes: ['title']
          }
        ],
        raw: true,
      });
      if(!itemCategories) {
        return next(createError(404, 'Item Categories not found!'));
      }
      res.status(200).json(itemCategories);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getItemCategoryById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const itemCategory = await ItemCategory.findByPk(id, {
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
      if (!itemCategory) {
        return next(createError(404, 'Item Category not found!'));
      }
      res.status(200).json(itemCategory);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createItemCategory = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { title, description, brand } = req.body;
      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });
      const itemCategory = await ItemCategory.create({
        title,
        description,
        brand_id,
      }, {
        transaction: t,
        raw: true,
      });
      if(!itemCategory) {
        await t.rollback();
        return next(createError(404, 'Item Category not created!'));
      }
      await t.commit();
      res.status(201).json(itemCategory);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateItemCategory = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id, title, description, brand } = req.body;
      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });
      const itemCategory = await ItemCategory.update({
        title,
        description,
        brand_id,
      }, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });
      if (!itemCategory) {
        await t.rollback();
        return next(createError(404, 'Item Category not found!'));
      }
      await t.commit();
      res.status(200).json(itemCategory);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteItemCategory = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedItemCategory = await ItemCategory.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedItemCategory) {
        await t.rollback();
        return next(createError(404, 'Item Category not found!'))
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

module.exports = new ItemCategoryController();