'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction = sequelize.define('transaction', {
    type_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    amount: DataTypes.DOUBLE
  }, {});
  transaction.associate = function (models) {
    models.transaction.belongsTo(models.transaction_type, { foreignKey: "type_id", targetKey: "id" });
    models.transaction.belongsTo(models.users, { foreignKey: "user_id", targetKey: "id" });
    models.transaction.belongsTo(models.events, { foreignKey: "event_id", targetKey: "id" });
  };
  return transaction;
};