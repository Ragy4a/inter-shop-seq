const { Router } = require('express');
const router = new Router();

const brandRouter = require('./brandRouters');
const customerRouter = require('./customerRouters');
const storeRouter = require('./storeRouters');
const modelRouter = require('./modelRouters');
const orderRouter = require('./orderRouters');
const itemCategoryRouter = require('./itemCategoryRouters');
const itemTypeRouter = require('./itemTypeRouters');
const itemRouter = require('./itemRouters');

router.use('/brands', brandRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/models', modelRouter);
router.use('/orders', orderRouter);
router.use('/categories', itemCategoryRouter);
router.use('/types', itemTypeRouter);
router.use('/items', itemRouter);

module.exports = router;