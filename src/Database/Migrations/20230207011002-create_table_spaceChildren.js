module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('spaceChildrens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      bibleStory: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      gruop: {
        type: Sequelize.STRING,
        allowNull: false,

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
    return queryInterface.dropTable('spaceChildrens');
  },
};
