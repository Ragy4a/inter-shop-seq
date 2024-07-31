const { Router } = require('express');
const router = new Router();
const customerController = require('../controllers/customerController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, customerController.getAllCustomers)
        .post(customerController.createCustomer)
        .put(customerController.updateCustomer);
router
    .route('/:id')
        .get(customerController.getCustomerById)
        .delete(customerController.deleteCustomer);

module.exports = router;