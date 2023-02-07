"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Gruop = require('../Models/Gruop'); var _Gruop2 = _interopRequireDefault(_Gruop);

class GruopController {
  /* functoin store*/

  async store(req, res) {
    try {
      const gruopNew = await _Gruop2.default.create({ ...req.body });
      return res.json({ gruopNew });
    } catch (e) {
      console.log(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  /* functoin index*/
  async index(req, res) {
    try {
      const gruops = await _Gruop2.default.findAll();
      return res.status(200).json(gruops);
    } catch (e) {
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  /* function show*/
  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }
      const gruopData = await _Gruop2.default.findByPk(req.params.id);
      return res.status(200).json(gruopData);
    } catch (e) {
      return res.status(400).json({
        errors: ['Acesso não Autorizado!'],
      });
    }
  }

  /* function update*/
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const gruop = await _Gruop2.default.findByPk(id);
      if (!gruop) {
        return res.status(400).json({
          errors: ['Grupo nao encontrada'],
        });
      }

      const newDatagruop = await _Gruop2.default.update(req.body);
      return res.status(200).json({ newDatagruop });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  /* function delete*/

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const gruop = await _Gruop2.default.findByPk(id);
      if (!gruop) {
        return res.status(400).json({
          errors: ['Gruop nao encontrada'],
        });
      }

      await _Gruop2.default.destroy();
      return res.status(200).json('Grupo deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new GruopController();
