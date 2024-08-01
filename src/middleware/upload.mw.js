const path = require('path');
const multer = require('multer');
const { staticConfig: { staticPath } } = require('../config/staticConfig');

const storageBrandLogoImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(staticPath, 'logos', 'brands'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const filterImage = (req, file, cb) => {
    const mimeTypeRegex = /^image\/(png|jpeg|gif)$/;
    if (mimeTypeRegex.test(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports.uploadBrandLogoImage = multer({
    storage: storageBrandLogoImage,
    fileFilter: filterImage,
});