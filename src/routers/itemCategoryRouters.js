const { Router } = require('express');
const router = new Router();
const itemCategoryController = require('../controllers/itemCategoryController');

const { 
    paginate: { paginateData },
    validate: { validateItemCategory } } = require('../middleware');

router
    .route('/')
        .get(paginateData, itemCategoryController.getAllItemCategories)
        .post(validateItemCategory, itemCategoryController.createItemCategory)
        .put(validateItemCategory, itemCategoryController.updateItemCategory);
router
    .route('/:id')
        .get(itemCategoryController.getItemCategoryById)
        .delete(itemCategoryController.deleteItemCategory);

module.exports = router;