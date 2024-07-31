const { Router } = require('express');
const router = new Router();
const itemController = require('../controllers/itemController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, itemController.getAllItems)
        .post(itemController.createItem)
        .put(itemController.updateItem);
router
    .route('/:id')
        .get(itemController.getItemById)
        .delete(itemController.deleteItem);

module.exports = router;