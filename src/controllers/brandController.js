const { Brand } = require('../database/models');

class BrandController {
  getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.findAll();
      res.json(brands);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  getBrandById = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json('Brand not found');
      }
      res.json(brand);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  createBrand = async (req, res) => {
    try {
      const brand = await Brand.create(req.body);
      res.status(201).json(brand);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  updateBrand = async (req, res) => {
    try {
      const { id } = req.body;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json('Brand not found');
      }
      await brand.update(req.body);
      res.json(brand);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  deleteBrand = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json('Brand not found');
      }
      await brand.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = new BrandController();