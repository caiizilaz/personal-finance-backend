'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {});
  users.associate = function (models) {
    models.users.hasMany(models.transaction, { foreignKey: "user_id", sourceKey: "id" });
    models.users.hasMany(models.event, { foreignKey: "user_id", sourceKey: "id" });
  };
  return users;
};