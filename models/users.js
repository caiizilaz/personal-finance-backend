'use strict';

import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/constants'

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {
      timestamps: false,
    });
  users.associate = function (models) {
    models.users.hasMany(models.transactions, { foreignKey: "user_id", sourceKey: "id" });
    models.users.hasMany(models.events, { foreignKey: "user_id", sourceKey: "id" });
  }
  users.prototype.authenticate = function authenticate(value) {
    return compareSync(value, this.password)
  }
  users.prototype.createToken = function createToken() {
    const token = jwt.sign(
      {
        id: this.id,
        username: this.username
      },
      constants.JWT_SECRET
    )
    return {
      token
    }
  }
  users.beforeCreate(function (model, options, cb) {
    model.password = hashSync(model.password)
  });
  return users;
};