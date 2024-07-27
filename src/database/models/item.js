'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.ItemCategory, { foreignKey: 'category_id' });
      Item.belongsTo(models.ItemType, { foreignKey: 'type_id' });
      Item.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      Item.belongsTo(models.Model, { foreignKey: 'model_id' });
      Item.belongsTo(models.Store, { foreignKey: 'store_id' });
      Item.belongsToMany(models.Order, { through: models.ItemOrder });
    }
  }

  Item.init({
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item_categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item_types',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'models',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stores',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    price: {
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Item',
    underscored: true,
  });

  return Item;
};