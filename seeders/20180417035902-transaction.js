'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('transaction', [
      { date: new Date(), amount: 500, createdAt: new Date(), updatedAt: new Date(), type_id: 1, user_id: 1 },
      { date: new Date(), amount: 1000, createdAt: new Date(), updatedAt: new Date(), type_id: 2, user_id: 1 },
      { date: new Date(), amount: 150, createdAt: new Date(), updatedAt: new Date(), event_id: 1, type_id: 3, user_id: 1 },
      { date: new Date(), amount: 50, createdAt: new Date(), updatedAt: new Date(), event_id: 2, type_id: 4, user_id: 1 },
    ])
  ,

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
