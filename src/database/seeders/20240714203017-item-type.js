'use strict';
const { item_types } = require('../../constants/seeders');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_types', item_types, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item_types', null, {});
  }
};