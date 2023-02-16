import Sequelize, { Model } from 'sequelize';
import Children from './Children';

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
      statusChildren: {
        type: Sequelize.STRING,
        dafaultValue: 'on',
        validate: {
          notEmpty: {
            msg: 'Status da criança não informado',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'eventRegistration',
      freezeTableName: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Children, { foreignKey: 'id_crianca', as: 'children' });
  }
}
