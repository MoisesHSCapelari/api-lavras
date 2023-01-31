"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const userNew = await _User2.default.create(req.body);
      const { id, name, login } = userNew;
      return res.json({ id, name, login });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['name', 'login'] });
      return res.status(200).json(users);
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
      const user = await _User2.default.findByPk(req.params.id);
      return res.status(200).json(user);
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

      const user = await _User2.default.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário nao encontrado'],
        });
      }

      const newDataUser = await user.update(req.body);
      const { id, name, login } = newDataUser;
      return res.status(200).json({ id, name, login });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  // delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const user = await _User2.default.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário nao encontrado'],
        });
      }

      await user.destroy();
      return res.status(200).json('Usuário deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
