'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Order.belongsToMany(models.Item, { through: 'Item_Order', foreignKey: 'order_id' });
    }
  }

  Order.init({
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    amount: {
      type: DataTypes.INTEGER
    },
    paid: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true,
  });

  return Order;
};