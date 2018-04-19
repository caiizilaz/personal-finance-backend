'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('transaction_types', [
      { type_name: 'monthly_wage', is_income: true },
      { type_name: 'freelance_consideration', is_income: true },
      { type_name: 'eat', is_income: false },
      { type_name: 'travel', is_income: false },
      { type_name: 'etc', is_income: false },
    ])
  ,

  down: (queryInterface, Sequelize) => {
  }
};
