"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    const { login = '', password = '' } = req.body;

    if (!login || !password) {
      return res.status(401).json({
        errors: ['Credenciais de acesso invalidas'],
      });
    }
    const user = await _User2.default.findOne({ where: { login } });
    if (!user) {
      return res.status(400).json({
        errors: ['Usuário nao cadastrado'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Usuario ou senha invalidos'],
      });
    }
    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, login }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

exports. default = new TokenController();
