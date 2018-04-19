'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction_types = sequelize.define('transaction_types', {
    type_name: DataTypes.STRING,
    is_income: DataTypes.BOOLEAN
  }, {timestamps: false,});
  transaction_types.associate = function(models) {
    models.transaction_types.hasMany(models.transactions, { foreignKey: "type_id", sourceKey: "id" });
  };
  return transaction_types;
};