'use strict';
const { models } = require('../../constants/seeders');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('models', models, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('models', null, {});
  }
};