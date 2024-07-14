'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemOrder extends Model {
    static associate(models) {
      ItemOrder.belongsTo(models.Item, { foreignKey: 'item_id' });
      ItemOrder.belongsTo(models.Order, { foreignKey: 'order_id' });
    }
  }

  ItemOrder.init({
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'items',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'ItemOrder',
    underscored: true,
  });

  return ItemOrder;
};