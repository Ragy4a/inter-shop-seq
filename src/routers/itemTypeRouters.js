const { Router } = require('express');
const router = new Router();
const itemTypeController = require('../controllers/itemTypeController');

const { 
    paginate: { paginateData },
    validate: { validateDefault } } = require('../middleware');

router
    .route('/')
        .get(paginateData, itemTypeController.getAllItemTypes)
        .post(validateDefault, itemTypeController.createItemType)
        .put(validateDefault, itemTypeController.updateItemType);
router
    .route('/:id')
        .get(itemTypeController.getItemTypeById)
        .delete(itemTypeController.deleteItemType);

module.exports = router;