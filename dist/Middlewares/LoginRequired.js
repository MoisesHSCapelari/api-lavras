"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Realize o Login para acessar a pagina'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dataUSer = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, login } = dataUSer;
    const user = await _User2.default.findOne({
      where: {
        id,
        login,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário invalido'],
      });
    }
    req.userId = id;
    req.userLogin = login;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token de acesso expirado ou invalido'],
    });
  }
};
