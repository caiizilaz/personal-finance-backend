'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      is_admin: {
        type: Sequelize.BOOLEAN
      },
    }).then(function () {
      return [
        queryInterface.addColumn('transactions', 'user_id', {
          type: Sequelize.INTEGER,
          after: 'id'
        }),
        queryInterface.addColumn('events', 'user_id', {
          type: Sequelize.INTEGER,
          after: 'id'
        })
      ];
    }).then(function () {
      return [
        queryInterface.addConstraint('transactions', ['user_id'], {
          type: 'FOREIGN KEY',
          name: 'users',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade'
        }),
        queryInterface.addConstraint('events', ['user_id'], {
          type: 'FOREIGN KEY',
          name: 'users',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade'
        })
      ];
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};