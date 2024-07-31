const createError = require('http-errors');
const { Item, ItemCategory, ItemType, Brand, Model, Store, sequelize } = require('../database/models');

class ItemController {
  getAllItems = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const items = await Item.findAll({
        attributes: ['id', 'price', 'amount'],
        limit,
        offset,
        raw: true,
      });
      if(!items) {
        return next(createError(404, 'Items not found!'));
      }
      res.status(200).json(items);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getItemById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: ItemCategory,
            attributes: ['title']
          },
          {
            model: ItemType,
            attributes: ['title']
          },
          {
            model: Brand,
            attributes: ['title']
          },
          {
            model: Model,
            attributes: ['title']
          },
          {
            model: Store,
            attributes: ['title']
          }
        ],
        raw: true,
      });
      if (!item) {
        return next(createError(404, 'Item not found!'));
      }
      res.status(200).json(item);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { category, type, brand, model, store, price, amount } = req.body;

      const { id: category_id } = await ItemCategory.findOne({
        where: { title: category },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: type_id } = await ItemType.findOne({
        where: { title: type },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: model_id } = await Model.findOne({
        where: { title: model },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: store_id } = await Store.findOne({
        where: { title: store },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const item = await Item.create({
        category_id,
        type_id,
        brand_id,
        model_id,
        store_id,
        price,
        amount,
      }, {
        transaction: t,
        raw: true,
      });

      if(!item) {
        await t.rollback();
        return next(createError(404, 'Item not created!'));
      }

      await t.commit();
      res.status(201).json(item);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id, category, type, brand, model, store, price, amount } = req.body;

      const { id: category_id } = await ItemCategory.findOne({
        where: { title: category },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: type_id } = await ItemType.findOne({
        where: { title: type },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: brand_id } = await Brand.findOne({
        where: { title: brand },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: model_id } = await Model.findOne({
        where: { title: model },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const { id: store_id } = await Store.findOne({
        where: { title: store },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });

      const item = await Item.update({
        category_id,
        type_id,
        brand_id,
        model_id,
        store_id,
        price,
        amount,
      }, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });

      if (!item) {
        await t.rollback();
        return next(createError(404, 'Item not found!'));
      }

      await t.commit();
      res.status(200).json(item);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedItem = await Item.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedItem) {
        await t.rollback();
        return next(createError(404, 'Item not found!'))
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

module.exports = new ItemController();