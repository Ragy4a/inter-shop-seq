const createError = require('http-errors');
const { ItemType, sequelize } = require('../database/models');

class ItemTypeController {
  getAllItemTypes = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const itemTypes = await ItemType.findAll({
        attributes: ['id', 'title'],
        limit,
        offset,
        raw: true,
      });
      if(!itemTypes) {
        return next(createError(404, 'Item Types not found!'));
      }
      res.status(200).json(itemTypes);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getItemTypeById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const itemType = await ItemType.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        raw: true,
      });
      if (!itemType) {
        return next(createError(404, 'Item Type not found!'));
      }
      res.status(200).json(itemType);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createItemType = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const itemType = await ItemType.create(req.body, {
        transaction: t,
        raw: true,
      });
      if(!itemType) {
        await t.rollback();
        return next(createError(404, 'Item Type not created!'));
      }
      await t.commit();
      res.status(201).json(itemType);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateItemType = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.body;
      const itemType = await ItemType.update(req.body, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });
      if (!itemType) {
        await t.rollback();
        return next(createError(404, 'Item Type not found!'));
      }
      await t.commit();
      res.status(200).json(itemType);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteItemType = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedItemType = await ItemType.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedItemType) {
        await t.rollback();
        return next(createError(404, 'Item Type not found!'))
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

module.exports = new ItemTypeController();