const { Router } = require('express');
const router = new Router();
const customerController = require('../controllers/customerController');

const { 
    paginate: { paginateData },
    validate: { validateCustomer } } = require('../middleware');

router
    .route('/')
        .get(paginateData, customerController.getAllCustomers)
        .post(validateCustomer, customerController.createCustomer)
        .put(validateCustomer, customerController.updateCustomer);
router
    .route('/:id')
        .get(customerController.getCustomerById)
        .delete(customerController.deleteCustomer);

module.exports = router;