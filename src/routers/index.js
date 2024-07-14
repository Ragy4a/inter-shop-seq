const { Router } = require('express');
const router = new Router();

const brandRouter = require('./brandRouters');

router.use('/brands', brandRouter);

module.exports = router;