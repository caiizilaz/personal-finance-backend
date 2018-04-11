'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transaction_type', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_name: {
        type: Sequelize.STRING
      },
      is_income: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(function () {
      return queryInterface.addColumn('transaction', 'type_id', {
        type: Sequelize.INTEGER,
        after: 'id'
      });
    }).then(function () {
      return queryInterface.addConstraint('transaction', ['type_id'], {
        type: 'FOREIGN KEY',
        name: 'transaction_type',
        references: {
          table: 'transaction_type',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transaction_type');
  }
};