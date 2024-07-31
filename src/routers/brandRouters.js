const { Router } = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

const { paginate: { paginateData } } = require('../middleware');

router
    .route('/')
        .get(paginateData, brandController.getAllBrands)
        .post(brandController.createBrand)
        .put(brandController.updateBrand);
router
    .route('/:id')
        .get(brandController.getBrandById)
        .delete(brandController.deleteBrand);

module.exports = router;