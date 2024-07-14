'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Item, { foreignKey: 'brand_id' });
      Brand.hasMany(models.ItemCategory, { foreignKey: 'brand_id' });
      Brand.hasMany(models.Model, { foreignKey: 'brand_id' });
    }
  }
  Brand.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 16],
          msg: 'Title must be more than 2 and less than 12 symbols.'
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
    modelName: 'Brand',
    underscored: true,
  });
  return Brand;
};