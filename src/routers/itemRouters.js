const { Router } = require('express');
const router = new Router();
const itemController = require('../controllers/itemController');

const { 
    paginate: { paginateData },
    validate: { validateItem } } = require('../middleware');

router
    .route('/')
        .get(paginateData, itemController.getAllItems)
        .post(validateItem, itemController.createItem)
        .put(validateItem, itemController.updateItem);
router
    .route('/:id')
        .get(itemController.getItemById)
        .delete(itemController.deleteItem);

module.exports = router;