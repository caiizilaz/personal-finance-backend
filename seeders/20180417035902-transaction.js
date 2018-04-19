'use strict';
const helper = require('../helper')
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('transactions', [
      { date: helper.cusDate(17), amount: 500, type_id: 1, user_id: 1 },
      { date: helper.cusDate(18), amount: 1000, type_id: 2, user_id: 1 },
      { date: helper.cusDate(19), amount: 150, event_id: 1, type_id: 3, user_id: 1 },
      { date: helper.cusDate(20), amount: 50, event_id: 2, type_id: 4, user_id: 1 },
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
