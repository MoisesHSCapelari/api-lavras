import Sequelize, { Model } from 'sequelize';
import EventRegistration from './EventRegistration';

export default class EventEI extends Model {
  static init(sequelize) {
    super.init({
      historyTold: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Historia não informada',
          },
        },
      },
      gruop: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Grupo não informado',
          },
        },
      },
      contadora: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome do responsavel não informado',
          },
        },
      },
      dateEvent: {
        type: Sequelize.DATE,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Data do espaço infantil não informada',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'eventsEI',
      freezeTableName: true,
    });

    return this;
  }
}
