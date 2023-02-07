module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('colaborates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      maritalStatus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bDate: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      batismDate: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      RG: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hasChildren: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qdtChildren: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ageChildren: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profission: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      workChildren: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      church: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactChildren: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      disponibilit: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('colaborates');
  },
};
