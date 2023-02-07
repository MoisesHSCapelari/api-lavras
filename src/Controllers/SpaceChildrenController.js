import SpaceChildren from '../Models/SpaceChildren';

class SpaceChildrenController {
  async store(req, res) {
    try {
      const eventNew = await SpaceChildren.create(req.body);
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
      const spaceChildren = await SpaceChildren.findAll();
      return res.status(200).json(spaceChildren);
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
      const spaceChildren = await SpaceChildren.findByPk(req.params.id);
      return res.status(200).json(spaceChildren);
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

      const spaceChildren = await SpaceChildren.findByPk(req.params.id);
      if (!spaceChildren) {
        return res.status(400).json({
          errors: ['Evento de Espaço Infantil não encontrado'],
        });
      }

      const newSpaceChildren = await SpaceChildren.update(req.body);
      return res.status(200).json(newSpaceChildren);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SpaceChildrenController();
