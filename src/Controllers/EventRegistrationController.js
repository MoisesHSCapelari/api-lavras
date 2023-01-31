import { Sequelize } from 'sequelize';
import EventRegistration from '../Models/EventRegistration';

class EventRegistrationController {
  async store(req, res) {
    try {
      const eventRegistrationNew = await EventRegistration.create(req.body);
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
      const eventsRegistrations = await EventRegistration.findAll({
        attributes: [
          'id_evento', 'id_crianca',
          [Sequelize.fn('COUNT', Sequelize.col('id_evento')), 'count'],
        ],
        group: ['id_evento', 'id_crianca'],
      });

      return res.status(200).json(eventsRegistrations);
    } catch (e) {
      return res.status(500).json({
        errors: ['Erro interno, Tente novamente mais tarde.'],
      });
    }
  }

  // show
  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }
      const eventRegistration = await EventRegistration.findByPk(req.params.id);
      return res.status(200).json(eventRegistration);
    } catch (e) {
      return res.status(400).json({
        errors: ['Acesso não Autorizado!'],
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
