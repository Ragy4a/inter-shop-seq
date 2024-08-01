const createError = require('http-errors')
const { Brand, sequelize } = require('../database/models');

class BrandController {
  getAllBrands = async (req, res, next) => {
    try {
      const { limit, offset } = req.pagination;
      const brands = await Brand.findAll({
        attributes: ['id', 'title'],
        limit,
        offset,
        raw: true,
      });
      if(!brands) {
        return next(createError(404, 'Brands not found!'));
      }
      res.status(200).json(brands);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  getBrandById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        raw: true,
      });
      if (!brand) {
        return next(createError(404, 'Brand not found!'));
      }
      res.status(200).json(brand);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  createBrand = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const brand = await Brand.create(req.body, {
        transaction: t,
        raw: true,
      });
      if(!brand) {
        await t.rollback();
        return next(createError(404, 'Brand not created!'));
      }
      await t.commit();
      res.status(201).json(brand);
    } catch (error) {
      console.log(error.message);      
      await t.rollback();
      next(error);
    }
  }

  updateBrand = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.body;
      const brand = await Brand.update(req.body, {
        where: {
          id,
        },
        transaction: t,
        raw: true,
      });
      if (!brand) {
        await t.rollback();
        return next(createError(404, 'Brand not found!'));
      }
      await t.commit();
      res.status(200).json(brand);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

  deleteBrand = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletedBrand = await Brand.destroy({
        where: {
          id
        },
        transaction: t,
        raw: true,
      });
      if(!deletedBrand) {
        await t.rollback();
        return next(createError(404, 'Brand not found!'))
      }
      await t.commit();
      res.status(204).send();
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  }

   changeLogo = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      if (!req.file) {
        await t.rollback();
        return next(createError(400, 'No file uploaded!'));
      }
      const { file: { filename }, params: { id } } = req; 
      const [ [ updatedBrand ] ] = await Brand.update(
        {
          logo: filename,
        },
        {
          where: {
            id,
          },
          transaction: t,
          fields: ['logo'],
          raw: true,
          returning: ['id', 'title', 'logo']
        }
      );
      if (!updatedBrand) {
        await t.rollback();
        return next(createError(404, 'Brand not found!'));
      }
      await t.commit();
      res.status(200).json(updatedBrand);
    } catch (error) {
      console.log(error.message);
      await t.rollback();
      next(error);
    }
  };
};

module.exports = new BrandController();