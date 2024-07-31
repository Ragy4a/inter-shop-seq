const { Router } = require('express');
const router = new Router();
const itemTypeController = require('../controllers/itemTypeController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, itemTypeController.getAllItemTypes)
        .post(itemTypeController.createItemType)
        .put(itemTypeController.updateItemType);
router
    .route('/:id')
        .get(itemTypeController.getItemTypeById)
        .delete(itemTypeController.deleteItemType);

module.exports = router;