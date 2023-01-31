import EventEI from '../Models/EventEI';

class EventEIController {
  async store(req, res) {
    try {
      const eventNew = await EventEI.create(req.body);
      return res.json({ eventNew });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const eventEI = await EventEI.findAll();
      return res.status(200).json(eventEI);
    } catch (e) {
      return res.status(400).json('Acesso não Autorizado!');
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
      const eventEI = await EventEI.findByPk(req.params.id);
      return res.status(200).json(eventEI);
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

      const eventEI = await EventEI.findByPk(req.params.id);
      if (!eventEI) {
        return res.status(400).json({
          errors: ['Evento de Espaço Infantil não encontrado'],
        });
      }

      const newEventEI = await eventEI.update(req.body);
      return res.status(200).json(newEventEI);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new EventEIController();
