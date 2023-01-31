module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('eventsEI', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      history: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      gruop: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      contadora: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      dateEvent: {
        type: Sequelize.DATE,
        allowNull: false,

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
    return queryInterface.dropTable('eventsEI');
  },
};
