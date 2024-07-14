'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.hasMany(models.Item, { foreignKey: 'store_id' });
    }
  }

  Store.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 16],
          msg: 'Title must be more than 2 and less than 16 symbols.'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [10, 1000],
          msg: 'Description must be more than 10 and less than 1000 symbols.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Store',
    underscored: true,
  });
  return Store;
};