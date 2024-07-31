const yup = require('yup');

const PAGINATION_SCHEMA = yup.object().shape({
    limit: yup.number().min(1).max(100).required(),
    offset: yup.number().min(0).required()
});



module.exports = {
    PAGINATION_SCHEMA,
};