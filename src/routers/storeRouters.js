const { Router } = require('express');
const router = new Router();
const storeController = require('../controllers/storeController');

const { 
    paginate: { paginateData },
    validate: { validateDefault } } = require('../middleware');

router
    .route('/')
        .get(paginateData, storeController.getAllStores)
        .post(validateDefault, storeController.createStore)
        .put(validateDefault, storeController.updateStore);
router
    .route('/:id')
        .get(storeController.getStoreById)
        .delete(storeController.deleteStore);

module.exports = router;