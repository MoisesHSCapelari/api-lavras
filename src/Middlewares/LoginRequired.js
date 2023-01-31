import jwt from 'jsonwebtoken';
import User from '../Models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Realize o Login para acessar a pagina'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dataUSer = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, login } = dataUSer;
    const user = await User.findOne({
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
