'use strict';
const { item_categories } = require('../../constants/seeders');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_categories', item_categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item_categories', null, {});
  }
};