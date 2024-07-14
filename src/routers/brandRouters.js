const { Router } = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router
    .route('/')
        .get(brandController.getAllBrands)
        .post(brandController.createBrand)
        .put(brandController.updateBrand);
router
    .route('/:id')
        .get(brandController.getBrandById)
        .delete(brandController.deleteBrand);

module.exports = router;