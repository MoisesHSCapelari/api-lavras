"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('childrens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nameChildren: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      nameGuardianOne: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      passwordEntry: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      passwordOut: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,

      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'spaceChildrens',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('childrens');
  },
};
