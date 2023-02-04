"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Colaborate = require('./../Models/Colaborate'); var _Colaborate2 = _interopRequireDefault(_Colaborate);

class ColaboratesController {
  /* functoin store*/

  async store(req, res) {
    try {
      const colaborateNew = await _Colaborate2.default.create({ ...req.body });
      return res.json({ colaborateNew });
    } catch (e) {
      console.log(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  /* functoin index*/
  async index(req, res) {
    try {
      const colaborates = await _Colaborate2.default.findAll();
      return res.status(200).json(colaborates);
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
      const colaborateData = await _Colaborate2.default.findByPk(req.params.id);
      return res.status(200).json(colaborateData);
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

      const colaborate = await _Colaborate2.default.findByPk(id);
      if (!colaborate) {
        return res.status(400).json({
          errors: ['Colabora nao encontrada'],
        });
      }

      const newDataColaborate = await _Colaborate2.default.update(req.body);
      return res.status(200).json({ newDataColaborate });
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

      const colaborate = await _Colaborate2.default.findByPk(id);
      if (!colaborate) {
        return res.status(400).json({
          errors: ['Colabora nao encontrada'],
        });
      }

      await _Colaborate2.default.destroy();
      return res.status(200).json('Colabora deletada com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ColaboratesController();
