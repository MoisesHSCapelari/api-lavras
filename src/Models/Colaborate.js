import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Colaborate extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      maritalStatus: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Estado Civil não informado',
          },
        },
      },
      bDate: {
        type: Sequelize.DATE,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Data de Batismo não informada',
          },
        },
      },
      batismDate: {
        type: Sequelize.DATE,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Data de Batismo não informada',
          },
        },
      },
      RG: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'RG não informado',
          },
        },
      },
      CPF: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'CPF não informado',
          },
          unique: {
            msg: 'CPF ja Cadastrado',
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Telefone não informado',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Endereço não informado',
          },
        },
      },
      number: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Numero da Resiencia não informado',
          },
        },
      },
      hasChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe se possui filhos',
          },
        },
      },
      qdtChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe a quantidade de filhos',
          },
        },
      },
      ageChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'informe a faixa etária do(s) filho(s)',
          },
        },
      },
      profission: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Proffisão não informada',
          },
        },
      },
      workChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'finforme se ja trabalhou com crianças',
          },
        },
      },
      church: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Comum congregação não informada',
          },
        },
      },
      contactChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe se Possui contato com crianças',
          },
        },
      },
      disponibilit: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Disponibilidade não Informada',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'colaborates',
      freezeTableName: true,
    });
    return this;
  }
}
