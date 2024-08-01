const { Router } = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

const { 
    paginate: { paginateData }, 
    uploadBrandsLogo: { uploadBrandLogoImage },
    validate: { validateBrand } } = require('../middleware');

router
    .route('/')
        .get(paginateData, brandController.getAllBrands)
        .post(validateBrand, brandController.createBrand)
        .put(validateBrand, brandController.updateBrand);
router
    .route('/:id')
        .get(brandController.getBrandById)
        .patch(brandController.patchBrand)
        .delete(brandController.deleteBrand);
router
    .route('/:id/logos')
    .patch(uploadBrandLogoImage.single('brandLogo'), brandController.changeLogo)

module.exports = router;