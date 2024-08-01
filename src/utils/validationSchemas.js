const yup = require('yup');

const ID_CHECK = yup.number()
    .integer('Must be an intieger!')
    .positive('Must be positive!');
const TITLE_CHECK = yup.string().min(2, 'Must be more than 2.').max(16, 'Must be less than 16.').required('This field is required!');
const DESC_CHECK = yup.string().min(10).max(10).required();
const NUMBER_CHECK = yup.number().integer().positive().required();

const PAGINATION_SCHEMA = yup.object().shape({
    limit: yup.number().min(1).max(100).required(),
    offset: yup.number().min(0).required()
});

const BRAND_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    title: TITLE_CHECK,
    description: DESC_CHECK,
    logo: yup.string().url()
});

const CUSTOMER_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    name: yup.string().min(2).max(30).required(),
    email: yup.string().email('Must be an email address.').required(),
});

const ITEM_CATEGORY_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    title: TITLE_CHECK,
    description: DESC_CHECK,
    brand: yup.string(),
});

const DEFAULT_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    title: TITLE_CHECK,
    description: DESC_CHECK
});

const ITEM_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    category: yup.string(),
    type: yup.string(),
    brand: yup.string(),
    model: yup.string(),
    store: yup.string(),
    price: NUMBER_CHECK,
    amount: NUMBER_CHECK,
});

const MODEL_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    title: TITLE_CHECK,
    brand: yup.string(),
    description: DESC_CHECK
});

const ORDER_SCHEMA = yup.object().shape({
    id: ID_CHECK,
    code: yup.string().required(),
    date: yup.date(),
    customer: yup.string().required(),
    amount: NUMBER_CHECK,
    paid: yup.boolean(),
});

module.exports = {
    yup,
    PAGINATION_SCHEMA,
    DEFAULT_SCHEMA,
    BRAND_SCHEMA,
    CUSTOMER_SCHEMA,
    ITEM_CATEGORY_SCHEMA,
    ITEM_SCHEMA,
    MODEL_SCHEMA,
    ORDER_SCHEMA
};