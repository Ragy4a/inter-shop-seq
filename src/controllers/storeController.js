const createError = require('http-errors')
const { Store, sequelize } = require('../database/models');

class StoreController {
  getAllStores = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const stores = await Store.findAll({
        attributes: ['id', 'title', 'description'],
        limit,
        offset,
        raw: true,
      });
      if(!stores) {
        return next(createError(404, 'Stores not found!'));
      }
      res.status(200).json(stores);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getStoreById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const store = await Store.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        raw: true,
      });
      if (!store) {
        return next(createError(404, 'Store not found!'));
      }
      res.status(200).json(store);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createStore = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const store = await Store.create(req.body, {
        transaction: t,
        raw: true,
      });
      if(!store) {
        await t.rollback();
        return next(createError(404, 'Store not created!'));
      }
      await t.commit();
      res.status(201).json(store);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateStore = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.body;
      const store = await Store.update(req.body, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });
      if (!store) {
        await t.rollback();
        return next(createError(404, 'Store not found!'));
      }
      await t.commit();
      res.status(200).json(store);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteStore = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedStore = await Store.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedStore) {
        await t.rollback();
        return next(createError(404, 'Store not found!'))
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

module.exports = new StoreController();