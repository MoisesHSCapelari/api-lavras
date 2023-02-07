"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('eventRegistration', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'childrens',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    id_evento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'spaceChildrens',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('eventRegistration'),
};
