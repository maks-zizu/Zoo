'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
        userId: 1,
        name: 'Сойка',
        url: 'https://givnost.ru/wp-content/uploads/2018/07/sojka-ptica-opisanie-osobennosti-vidy-i-sreda-obitaniya-pticy-sojki-5.jpg',
        description: 'Тело сойки – птицы, причисляемой зоологами к отряду воробьинообразных, имеет длину порядка 15 см',
        price: 9990,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: 'Слон',
        url: 'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2022/12/22/6466a8cfd0904709bbf804bc0acd1332.max-2000x1000.jpg',
        description: 'самые крупные наземные животные на Земле',
        price: 189000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: 'Леопард',
        url: 'https://w.forfun.com/fetch/ba/ba7fcfff5f0afcd1caa9c7af8950f02a.jpeg',
        description: 'вид хищных млекопитающих семейства кошачьих',
        price: 169000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animals", null, {});
  },
};
