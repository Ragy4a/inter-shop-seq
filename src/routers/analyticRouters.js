const { Router } = require('express');
const router = new Router();
const { getBrandModelCounts, 
    getItemTypeCountsPerStore, 
    getTopCustomerByPurchaseCount, 
    getTopCustomerByPurchaseAmount } = require('../controllers/analyticController');

router.use('/brand-model-counts', getBrandModelCounts);
router.use('/item-type-counts-per-store', getItemTypeCountsPerStore);
router.use('/top-customer-by-purchase-count', getTopCustomerByPurchaseCount);
router.use('/top-customer-by-purchase-amount', getTopCustomerByPurchaseAmount);

module.exports = router;