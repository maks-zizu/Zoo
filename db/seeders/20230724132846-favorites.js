'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1,
        animalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        animalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
