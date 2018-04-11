'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction_type = sequelize.define('transaction_type', {
    type_name: DataTypes.STRING,
    is_income: DataTypes.BOOLEAN
  }, {});
  transaction_type.associate = function(models) {
    models.transaction_type.hasMany(models.transaction, { foreignKey: "type_id", sourceKey: "id" });
  };
  return transaction_type;
};