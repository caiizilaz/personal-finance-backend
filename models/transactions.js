'use strict';
module.exports = (sequelize, DataTypes) => {
  var transactions = sequelize.define('transactions', {
    type_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    amount: DataTypes.DOUBLE
  }, {timestamps: false,});
  transactions.associate = function (models) {
    models.transactions.belongsTo(models.transaction_types, { foreignKey: "type_id", targetKey: "id" });
    models.transactions.belongsTo(models.users, { foreignKey: "user_id", targetKey: "id" });
    models.transactions.belongsTo(models.events, { foreignKey: "event_id", targetKey: "id" });
  };
  return transactions;
};