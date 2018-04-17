'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('transaction_type', [
      { type_name: 'monthly_wage', is_income: true, createdAt: new Date(), updatedAt: new Date() },
      { type_name: 'freelance_consideration', is_income: true, createdAt: new Date(), updatedAt: new Date() },
      { type_name: 'eat', is_income: false, createdAt: new Date(), updatedAt: new Date() },
      { type_name: 'travel', is_income: false, createdAt: new Date(), updatedAt: new Date() },
      { type_name: 'etc', is_income: false, createdAt: new Date(), updatedAt: new Date() },
    ])
  ,

  down: (queryInterface, Sequelize) => {
  }
};
