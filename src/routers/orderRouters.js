const { Router } = require('express');
const router = new Router();
const orderController = require('../controllers/orderController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, orderController.getAllOrders)
        .post(orderController.createOrder)
        .put(orderController.updateOrder);
router
    .route('/:id')
        .get(orderController.getOrderById)
        .delete(orderController.deleteOrder);

module.exports = router;