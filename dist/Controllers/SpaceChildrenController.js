"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _SpaceChildren = require('../Models/SpaceChildren'); var _SpaceChildren2 = _interopRequireDefault(_SpaceChildren);

class SpaceChildrenController {
  async store(req, res) {
    try {
      const eventNew = await _SpaceChildren2.default.create(req.body);
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
      const spaceChildren = await _SpaceChildren2.default.findAll();
      return res.status(200).json(spaceChildren);
    } catch (e) {
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  // show
  async show(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }
      const spaceChildren = await _SpaceChildren2.default.findByPk(id);
      return res.status(200).json(spaceChildren);
    } catch (e) {
      return res.status(400).json({
        errors: ['Acesso não Autorizado!'],
      });
    }
  }

  // update
  async update(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const spaceChildren = await _SpaceChildren2.default.findByPk(id);
      if (!spaceChildren) {
        return res.status(400).json({
          errors: ['Evento de Espaço Infantil não encontrado'],
        });
      }

      const newSpaceChildren = await _SpaceChildren2.default.update(req.body);
      return res.status(200).json(newSpaceChildren);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new SpaceChildrenController();
