'use strict';
const { Model: SequelizeModel } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends SequelizeModel {
    static associate(models) {
      Model.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      Model.hasMany(models.Item, { foreignKey: 'model_id' });
    }
  }

  Model.init({
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
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brands',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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
    modelName: 'Model',
    underscored: true,
  });

  return Model;
};