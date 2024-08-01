const {
    yup,
    DEFAULT_SCHEMA,
    BRAND_SCHEMA,
    CUSTOMER_SCHEMA,
    ITEM_CATEGORY_SCHEMA,
    ITEM_SCHEMA,
    MODEL_SCHEMA,
    ORDER_SCHEMA
} = require('../utils/validationSchemas');

const validateSchema = (schema) => async (req, res, next) => {
    const { body } = req;
    try {
      await schema.validate(body, { abortEarly: false });
      next();
    } catch (error) {
      console.log(error.errors);
      res.status(400).json({ errors: error.errors });
    }
  };

module.exports.validateDefault = validateSchema(DEFAULT_SCHEMA);
module.exports.validateBrand = validateSchema(BRAND_SCHEMA);
module.exports.validateCustomer = validateSchema(CUSTOMER_SCHEMA);
module.exports.validateItemCategory = validateSchema(ITEM_CATEGORY_SCHEMA);
module.exports.validateItem = validateSchema(ITEM_SCHEMA);
module.exports.validateModel = validateSchema(MODEL_SCHEMA);
module.exports.validateOrder = validateSchema(ORDER_SCHEMA);