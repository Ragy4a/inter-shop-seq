const { ValidationError } = require('yup');
const { Sequelize: { BaseError } } = require('../database/models');
const { MulterError } = require('./upload.mw');

module.exports.validationErrorHandler = (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(400).send({
            errors: [{
                title: 'Validation error', 
                details: err.errors
            }],
        });
    }
    next(err)
};

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
    if (err instanceof BaseError) {
      return res.status(406).send({
        errors: [{
          title: 'Sequelize Error', 
          details: err.errors
        }]
      }) 
    };
    next(err);
  };
  
module.exports.multerErrorHandler = (err, req, res, next) => {
    if(err instanceof MulterError) {
        return res.status(406).send({
            errors: [{
                title: 'Multer Error',
                details: err.errors,
            }]
        })
    };
    next(err);
};

module.exports.errorHandler = (err, req, res, next) => {

    if(res.headerSent){
        return;
    }

    res.status(err?.status ?? 500).send({
        errors: [{
            title: err?.message ?? `Internal server error.`,
            errors: err.errors
        }]
    })
};