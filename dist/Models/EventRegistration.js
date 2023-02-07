"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class EventRegistration extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id_evento: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        references: {
          model: 'EventEI',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_crianca: {
        type: _sequelize2.default.INTEGER,
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
    this.belongsTo(models.SpaceChildren, { foreignKey: 'id_evento' });
    this.belongsTo(models.Children, { foreignKey: 'id_crianca' });
  }
} exports.default = EventRegistration;
