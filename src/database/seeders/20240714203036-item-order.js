'use strict';
const { item_orders } = require('../../constants/seeders');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_orders', item_orders, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item_orders', null, {});
  }
};