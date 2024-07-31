const { Router } = require('express');
const router = new Router();
const modelController = require('../controllers/modelController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, modelController.getAllModels)
        .post(modelController.createModel)
        .put(modelController.updateModel);
router
    .route('/:id')
        .get(modelController.getModelById)
        .delete(modelController.deleteModel);

module.exports = router;