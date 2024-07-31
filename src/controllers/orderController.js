const createError = require('http-errors');
const { Order, Customer, sequelize } = require('../database/models');

class OrderController {
  getAllOrders = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const orders = await Order.findAll({
        attributes: ['id', 'code'],
        limit,
        offset,
        raw: true,
      });
      if(!orders) {
        return next(createError(404, 'Orders not found!'));
      }
      res.status(200).json(orders);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getOrderById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'customer_id']
        },
        include: [
          {
            model: Customer,
            attributes: ['name']
          }
        ],
        raw: true,
      });
      if (!order) {
        return next(createError(404, 'Order not found!'));
      }
      res.status(200).json(order);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createOrder = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { code, date, customer, amount, paid } = req.body;
      const { id: customer_id } = await Customer.findOne({
        where: { name: customer },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });
      const order = await Order.create({
        code,
        date,
        customer_id,
        amount,
        paid,
      }, {
        transaction: t,
        raw: true,
      });
      if(!order) {
        await t.rollback();
        return next(createError(404, 'Order not created!'));
      }
      await t.commit();
      res.status(201).json(order);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateOrder = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id, code, date, customer, amount, paid } = req.body;
      const { id: customer_id } = await Customer.findOne({
        where: { name: customer },
        attributes: ['id'],
        transaction: t,
        raw: true,
      });
      const order = await Order.update({
        code,
        date,
        customer_id,
        amount,
        paid,
      }, {
        where: {
          id,
        },
        transaction: t,
        returning: ['*'],
        raw: true,
      });
      if (!order) {
        await t.rollback();
        return next(createError(404, 'Order not found!'));
      }
      await t.commit();
      res.status(200).json(order);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteOrder = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedOrder = await Order.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedOrder) {
        await t.rollback();
        return next(createError(404, 'Order not found!'))
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

module.exports = new OrderController();