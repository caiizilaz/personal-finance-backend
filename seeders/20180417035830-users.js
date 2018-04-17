'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [
      { username: 'flukky', password: '1234', email: 'flukky@ex.com', is_admin: true, createdAt: new Date(), updatedAt: new Date() }
    ])
  ,
  down: (queryInterface, Sequelize) => {

  }
};
