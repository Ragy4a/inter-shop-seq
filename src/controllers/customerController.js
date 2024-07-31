const createError = require('http-errors');
const { Customer, sequelize } = require('../database/models');

class CustomerController {
  getAllCustomers = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const customers = await Customer.findAll({
        attributes: ['id', 'name'],
        limit,
        offset,
        raw: true,
      });
      if (!customers) {
        return next(createError(404, 'Customers not found!'));
      }
      res.status(200).json(customers);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getCustomerById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        raw: true,
      });
      if (!customer) {
        return next(createError(404, 'Customer not found!'));
      }
      res.status(200).json(customer);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createCustomer = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const customer = await Customer.create(req.body, {
        transaction: t,
        raw: true,
      });
      if (!customer) {
        await t.rollback();
        return next(createError(404, 'Customer not found!'));
      }
      await t.commit();
      res.status(201).json(customer);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  updateCustomer = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.body;
      const customer = await Customer.update(req.body, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });
      if (!customer) {
        await t.rollback();
        return next(createError(404, 'Customer not found!'));
      }
      await t.commit();
      res.status(200).json(customer);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteCustomer = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedCustomer = await Customer.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if (!deletedCustomer) {
        await t.rollback();
        return next(createError(404, 'Customer not found!'));
      }
      await t.commit();
      res.status(204).send();
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }
}

module.exports = new CustomerController();