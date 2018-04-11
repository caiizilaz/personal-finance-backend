'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    user_id: DataTypes.INTERGER,
    date: DataTypes.DATE,
    detail: DataTypes.TEXT
  }, {});
  events.associate = function(models) {
    models.events.belongsTo(models.users, { foreignKey: "user_id", targetKey: "id" });
    models.events.hasMany(models.transaction, { foreignKey: "event_id", sourceKey: "id" });
  };
  return events;
};