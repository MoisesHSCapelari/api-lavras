module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('eventRegistration', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
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
    status: {
      type: Sequelize.STRING,
      allowNull: false,

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
