'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempagowda International Airport',
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'DumDum International Airport',
        city_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'Mysuru International Airport',
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'JP International Airport',
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'Lal Bhahadur Shastri Airport',
        city_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name:'MXB International Airport',
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()

      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
