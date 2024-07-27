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
    },
    {
      title: 'Sony',
      description: 'Sony Corporation',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'LG',
      description: 'LG Electronics',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Huawei',
      description: 'Huawei Technologies Co., Ltd.',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Dell',
      description: 'Dell Inc.',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Xiaomi',
      description: 'Xiaomi Corporation',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Asus',
      description: 'AsusTek Computer Inc.',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'HP',
      description: 'HP Inc.',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Lenovo',
      description: 'Lenovo Group Ltd.',
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
    },
    {
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      password: bcrypt.hashSync('alicepassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      password: bcrypt.hashSync('bobpassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      password: bcrypt.hashSync('charliepassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      password: bcrypt.hashSync('dianapassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Eve Adams',
      email: 'eve.adams@example.com',
      password: bcrypt.hashSync('evepassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Frank Stone',
      email: 'frank.stone@example.com',
      password: bcrypt.hashSync('frankpassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Grace Hopper',
      email: 'grace.hopper@example.com',
      password: bcrypt.hashSync('gracepassword', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Isaac Newton',
      email: 'isaac.newton@example.com',
      password: bcrypt.hashSync('isaacpassword', 8),
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
    },
    {
      code: 'ORD003',
      date: new Date(),
      customer_id: 3,
      amount: 200,
      paid: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD004',
      date: new Date(),
      customer_id: 4,
      amount: 250,
      paid: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD005',
      date: new Date(),
      customer_id: 5,
      amount: 300,
      paid: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD006',
      date: new Date(),
      customer_id: 6,
      amount: 350,
      paid: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD007',
      date: new Date(),
      customer_id: 7,
      amount: 400,
      paid: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD008',
      date: new Date(),
      customer_id: 8,
      amount: 450,
      paid: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD009',
      date: new Date(),
      customer_id: 9,
      amount: 500,
      paid: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      code: 'ORD010',
      date: new Date(),
      customer_id: 10,
      amount: 550,
      paid: false,
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  items: [
    {
      category_id: 1, // Electronics
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
      category_id: 2, // Furniture
      type_id: 2,
      brand_id: 2,
      model_id: 2,
      store_id: 2,
      price: 700,
      amount: 20,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 1, // Electronics
      type_id: 2,
      brand_id: 3,
      model_id: 3,
      store_id: 1,
      price: 300,
      amount: 15,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 2, // Furniture
      type_id: 1,
      brand_id: 4,
      model_id: 4,
      store_id: 2,
      price: 800,
      amount: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 1, // Electronics
      type_id: 3,
      brand_id: 5,
      model_id: 5,
      store_id: 1,
      price: 400,
      amount: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 3, // Appliances
      type_id: 4,
      brand_id: 6,
      model_id: 6,
      store_id: 2,
      price: 900,
      amount: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 1, // Electronics
      type_id: 3,
      brand_id: 1,
      model_id: 1,
      store_id: 1,
      price: 550,
      amount: 12,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 1, // Electronics
      type_id: 4,
      brand_id: 2,
      model_id: 2,
      store_id: 2,
      price: 650,
      amount: 25,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 3, // Appliances
      type_id: 5,
      brand_id: 3,
      model_id: 3,
      store_id: 1,
      price: 1000,
      amount: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      category_id: 1, // Electronics
      type_id: 6,
      brand_id: 4,
      model_id: 4,
      store_id: 2,
      price: 750,
      amount: 18,
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
    },
    {
      title: 'Appliances',
      description: 'Home appliances',
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
    },
    {
      title: 'Tablet',
      description: 'Tablet items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Television',
      description: 'Television items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Washing Machine',
      description: 'Washing machine items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Refrigerator',
      description: 'Refrigerator items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Headphones',
      description: 'Headphones items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Smartwatch',
      description: 'Smartwatch items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Camera',
      description: 'Camera items',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Printer',
      description: 'Printer items',
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
    },
    {
      title: 'Online Store',
      description: 'Online store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Outlet Store',
      description: 'Outlet store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Warehouse Store',
      description: 'Warehouse store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Pop-up Store',
      description: 'Pop-up store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Mobile Store',
      description: 'Mobile store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'International Store',
      description: 'International store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'City Center Store',
      description: 'City center store description',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Suburban Store',
      description: 'Suburban store description',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  models: [
    {
      title: 'Galaxy S21',
      description: 'Samsung Galaxy S21',
      brand_id: 1, // Samsung
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'iPhone 12',
      description: 'Apple iPhone 12',
      brand_id: 2, // Apple
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Xperia 5',
      description: 'Sony Xperia 5',
      brand_id: 3, // Sony
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'LG G8',
      description: 'LG G8 ThinQ',
      brand_id: 4, // LG
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Mate 40',
      description: 'Huawei Mate 40',
      brand_id: 5, // Huawei
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'XPS 13',
      description: 'Dell XPS 13',
      brand_id: 6, // Dell
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Mi 11',
      description: 'Xiaomi Mi 11',
      brand_id: 7, // Xiaomi
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'ZenBook',
      description: 'Asus ZenBook',
      brand_id: 8, // Asus
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Pavilion',
      description: 'HP Pavilion',
      brand_id: 9, // HP
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'ThinkPad',
      description: 'Lenovo ThinkPad',
      brand_id: 10, // Lenovo
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
    },
    {
      item_id: 3,
      order_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 4,
      order_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 5,
      order_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 6,
      order_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 7,
      order_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 8,
      order_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 9,
      order_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      item_id: 10,
      order_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]
};

module.exports = seeders;