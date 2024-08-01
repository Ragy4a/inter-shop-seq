const { Router } = require('express');
const router = new Router();
const modelController = require('../controllers/modelController');

const { 
    paginate: { paginateData },
    validate: { validateModel } } = require('../middleware');

router
    .route('/')
        .get(paginateData, modelController.getAllModels)
        .post(validateModel, modelController.createModel)
        .put(validateModel, modelController.updateModel);
router
    .route('/:id')
        .get(modelController.getModelById)
        .delete(modelController.deleteModel);

module.exports = router;