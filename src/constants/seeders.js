'use strict';
const bcrypt = require('bcrypt');

const seeders = {
  brands: [
    {
      title: 'Samsung',
      description: 'Samsung Electronics',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Apple',
      description: 'Apple Inc.',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  customers: [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: bcrypt.hashSync('password123', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: bcrypt.hashSync('password123', 8),
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  orders: [
    {
      code: 'ORD001',
      date: new Date(),
      customer_id: 1,
      amount: 100,
      paid: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD002',
      date: new Date(),
      customer_id: 2,
      amount: 150,
      paid: false,
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  items: [
    {
      category_id: 1,
      type_id: 1,
      brand_id: 1,
      model_id: 1,
      store_id: 1,
      price: 500,
      amount: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 2,
      type_id: 2,
      brand_id: 2,
      model_id: 2,
      store_id: 2,
      price: 700,
      amount: 20,
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  item_categories: [
    {
      title: 'Electronics',
      description: 'Electronic items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Furniture',
      description: 'Furniture items',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  item_types: [
    {
      title: 'Smartphone',
      description: 'Smartphone items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Laptop',
      description: 'Laptop items',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  stores: [
    {
      title: 'Main Store',
      description: 'Main store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Branch Store',
      description: 'Branch store description',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  models: [
    {
      title: 'Galaxy S21',
      description: 'Samsung Galaxy S21',
      brand_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'iPhone 12',
      description: 'Apple iPhone 12',
      brand_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  item_orders: [
    {
      item_id: 1,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 2,
      order_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]
};

module.exports = seeders;

// хешировал тут пароли из за того что при загрузке сидеров не работает set