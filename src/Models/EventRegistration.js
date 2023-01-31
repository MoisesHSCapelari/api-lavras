import Sequelize, { Model } from 'sequelize';

export default class EventRegistration extends Model {
  static init(sequelize) {
    super.init({
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EventEI',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_crianca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Children',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
      sequelize,
      tableName: 'eventRegistration',
      freezeTableName: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.EventEI, { foreignKey: 'id_evento' });
    this.belongsTo(models.Children, { foreignKey: 'id_crianca' });
  }
}
