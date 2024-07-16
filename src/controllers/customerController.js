const { Customer } = require('../database/models');

class CustomerController {
  getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  getCustomerById = async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);
      if (!customer) {
        return res.status(404).json('Customer not found');
      }
      res.json(customer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  createCustomer = async (req, res) => {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  updateCustomer = async (req, res) => {
    try {
      const { id } = req.body;
      const customer = await Customer.findByPk(id);
      if (!customer) {
        return res.status(404).json('Customer not found');
      }
      await customer.update(req.body);
      res.json(customer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  deleteCustomer = async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);
      if (!customer) {
        return res.status(404).json('Customer not found');
      }
      await customer.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new CustomerController();