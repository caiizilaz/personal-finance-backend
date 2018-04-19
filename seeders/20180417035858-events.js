'use strict';
const helper = require('../helper')
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('events', [
      { date: helper.cusDate(17), detail: 'meeting', user_id: 1 },
      { date: helper.cusDate(18), detail: 'hangout', user_id: 1 },
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
