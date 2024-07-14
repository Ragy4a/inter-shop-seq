'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCategory extends Model {
    static associate(models) {
      ItemCategory.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      ItemCategory.hasMany(models.Item, { foreignKey: 'categ_id' });
    }
  }

  ItemCategory.init({
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
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brands',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    sequelize,
    modelName: 'ItemCategory',
    underscored: true,
  });

  return ItemCategory;
};
