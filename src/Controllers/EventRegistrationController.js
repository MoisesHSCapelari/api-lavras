/* eslint-disable prefer-const */
/* eslint-disable radix */
/* eslint-disable no-unreachable */
import { Op } from 'sequelize';
import EventRegistration from '../Models/EventRegistration';
import Children from '../Models/Children';

class EventRegistrationController {
  async store(req, res) {
    try {
      const {
        id_evento,
        id_crianca,
        statusChildren,
        nameChildren,
        age,
        nameGuardianOne,
        phone,
        passwordEntry,
        passwordOut,
      } = req.body;
      let crianca = id_crianca;
      if (req.body.id_crianca == 0) {
        const childrenNew = await Children.create({
          nameChildren,
          age,
          nameGuardianOne,
          phone,
          passwordEntry,
          passwordOut,
        });
        crianca = childrenNew.id;
      }

      const eventRegistrationNew = await EventRegistration.create({
        id_evento,
        id_crianca: crianca,
        statusChildren,
      });

      return res.json(eventRegistrationNew);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      return res.json(req.params);
      const eventRegistration = await EventRegistration.findByPk(req.params.id_evento);
      return res.status(200).json(eventRegistration.hasMany(Children, {
        foreignKey: 'id_crianca',
      }));
    } catch (e) {
      return res.status(500).json({
        errors: ['Erro interno, Tente novamente mais tarde.'],
      });
    }
  }

  // show
  async show(req, res) {
    const { id_crianca } = req.body;

    try {
      if (!id_crianca) {
        return res.status(400).json({
          errors: ['ID da criança não informado'],
        });
      }

      const eventRegistration = await EventRegistration.findAll({
        include: [
          {
            model: Children,
            as: 'children',
            attributes: ['nameChildren', 'age', 'nameGuardianOne', 'phone'],
          },
        ],
        attributes: ['statusChildren', 'id_evento'],
        where: { id_crianca },
      });

      if (!eventRegistration) {
        return res.status(400).json({
          errors: ['Nenhum registro encontrado para essa criança'],
        });
      }

      return res.status(200).json(eventRegistration);
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const eventRegistration = await EventRegistration.findByPk(req.params.id);
      if (!eventRegistration) {
        return res.status(400).json({
          errors: ['Registro nao encontrado'],
        });
      }

      const newEventRegistration = await user.update(req.body);
      return res.status(200).json({ newEventRegistration });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new EventRegistrationController();
