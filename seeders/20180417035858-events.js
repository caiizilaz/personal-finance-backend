'use strict';
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('events', [
      { date: new Date(), detail: 'meeting', createdAt: new Date(), updatedAt: new Date(), user_id: 1 },
      { date: new Date(), detail: 'hangout', createdAt: new Date(), updatedAt: new Date(), user_id: 1 },
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
