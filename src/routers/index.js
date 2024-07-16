const { Router } = require('express');
const router = new Router();

const brandRouter = require('./brandRouters');
const customerRouter = require('./customerRouters');

router.use('/brands', brandRouter);
router.use('/customers', customerRouter);

module.exports = router;