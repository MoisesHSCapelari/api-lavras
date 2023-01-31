import jwt from 'jsonwebtoken';
import User from '../Models/User';

class TokenController {
  async store(req, res) {
    const { login = '', password = '' } = req.body;

    if (!login || !password) {
      return res.status(401).json({
        errors: ['Credenciais de acesso invalidas'],
      });
    }
    const user = await User.findOne({ where: { login } });
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
    const token = jwt.sign({ id, login }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenController();
