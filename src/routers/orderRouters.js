const { Router } = require('express');
const router = new Router();
const orderController = require('../controllers/orderController');

const { 
    paginate: { paginateData },
    validate: { validateOrder } } = require('../middleware');

router
    .route('/')
        .get(paginateData, orderController.getAllOrders)
        .post(validateOrder, orderController.createOrder)
        .put(validateOrder, orderController.updateOrder);
router
    .route('/:id')
        .get(orderController.getOrderById)
        .delete(orderController.deleteOrder);

module.exports = router;