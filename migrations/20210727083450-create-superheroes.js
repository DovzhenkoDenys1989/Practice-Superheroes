'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      realName: {
        allowNull: false,
        field: 'real_name',
        type: Sequelize.STRING
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.TEXT
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superheroes');
  }
};