'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemType extends Model {
    static associate(models) {
      ItemType.hasMany(models.Item, { foreignKey: 'type_id' });
    }
  }

  ItemType.init({
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
    modelName: 'ItemType',
    underscored: true,
  });

  return ItemType;
};