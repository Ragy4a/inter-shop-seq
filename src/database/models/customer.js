'use strict';
const { hashSync } = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, { foreignKey: 'customer_id' });
    }
  }

  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 30],
          msg: 'Name must be more than 2 and less than 30 symbols.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be an email address.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('password', hashSync(value, 10));
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
    underscored: true,
  });

  return Customer;
};