const createError = require('http-errors');
const { Brand, Model, Store, Item, ItemType, ItemOrder, Order, Customer, sequelize } = require('../database/models');

class AnalyticController {
    // Количество моделей каждого бренда:
    getBrandModelCounts = async (req, res, next) => {
        try {
            const brandModelCounts = await Brand.findAll({
                attributes: [
                    'title',
                    [sequelize.fn('COUNT', sequelize.fn('DISTINCT', sequelize.col('Models.id'))), 'model_count']
                ],
                include: [
                    {
                        model: Model,
                        attributes: []
                    }
                ],
                group: ['Brand.id', 'Brand.title'],
                raw: true
            });

            if (!brandModelCounts) {
                return next(createError(400, 'Bad request!'));
            }
            res.status(200).json(brandModelCounts);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }

    // Количество товаров КАЖДОГО типа на каждом из складов:
    getItemTypeCountsPerStore = async (req, res, next) => {
        try {
            const itemTypeCountsPerStore = await Item.findAll({
                attributes: [
                    [sequelize.col('ItemType.title'), 'type'],
                    [sequelize.col('Store.title'), 'store'],
                    [sequelize.fn('SUM', sequelize.col('Item.amount')), 'total']
                ],
                include: [
                    {
                        model: ItemType,
                        attributes: []
                    },
                    {
                        model: Store,
                        attributes: []
                    }
                ],
                group: ['ItemType.title', 'Store.title'],
                raw: true
            });

            if (!itemTypeCountsPerStore) {
                return next(createError(400, 'Bad request!'));
            }
            res.status(200).json(itemTypeCountsPerStore);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }

    // Имя покупателя, сделавшего больше всех покупок:
    getTopCustomerByPurchaseCount = async (req, res, next) => {
        try {
            const topCustomer = await Customer.findOne({
                attributes: [
                    'name',
                    [sequelize.fn('COUNT', sequelize.col('Orders.id')), 'Orders']
                ],
                include: [{
                    model: Order,
                    as: 'Orders',
                    attributes: []
                }],
                group: ['Customer.id', 'Customer.name'],
                order: [[sequelize.literal('"Orders"'), 'DESC']],
                limit: 1,
                subQuery: false
            });
            res.json(topCustomer);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }

    // Имя покупателя, сделавшего самую дорогую покупку:
    getTopCustomerByPurchaseAmount = async (req, res, next) => {
        try {
            const topCustomerByAmount = await Customer.findOne({
                attributes: [
                    'name',
                    [sequelize.fn('MAX', sequelize.col('Orders.amount')), 'max_purchase_amount']
                ],
                include: [{
                    model: Order,
                    as: 'Orders',
                    attributes: []
                }],
                group: ['Customer.id', 'Customer.name'],
                order: [[sequelize.literal('max_purchase_amount'), 'DESC']],
                limit: 1,
                subQuery: false
            });
            if (!topCustomerByAmount) {
                return next(createError(400, 'Bad request!'));
            }
            res.status(200).json(topCustomerByAmount);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
};

module.exports = new AnalyticController();