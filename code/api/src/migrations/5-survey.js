'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      style: {
        type: Sequelize.STRING
      },
      tops: {
        type: Sequelize.STRING
      },
      bottoms: {
        type: Sequelize.STRING
      },
      dresses: {
        type: Sequelize.STRING
      },
      shoes: {
        type: Sequelize.STRING
      },
      accessories: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('surveys');
  }
};
