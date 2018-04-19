'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      detail: {
        type: Sequelize.TEXT
      },
    }).then(function () {
      return queryInterface.addColumn('transactions', 'event_id', {
        type: Sequelize.INTEGER,
        after: 'id'
      });
    }).then(function () {
      return queryInterface.addConstraint('transactions', ['event_id'], {
        type: 'FOREIGN KEY',
        name: 'events',
        references: {
          table: 'events',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};