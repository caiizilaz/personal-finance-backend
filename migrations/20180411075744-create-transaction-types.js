'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transaction_types', {
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
    })
    .then(function () {
      return queryInterface.addColumn('transactions', 'type_id', {
        type: Sequelize.INTEGER,
        after: 'id'
      });
    }).then(function () {
      return queryInterface.addConstraint('transactions', ['type_id'], {
        type: 'FOREIGN KEY',
        name: 'transaction_types',
        references: {
          table: 'transaction_types',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transaction_types');
  }
};