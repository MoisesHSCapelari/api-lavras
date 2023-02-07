import Gruop from '../Models/Gruop';

class GruopController {
  /* functoin store*/

  async store(req, res) {
    try {
      const gruopNew = await Gruop.create({ ...req.body });
      return res.json({ gruopNew });
    } catch (e) {
      console.log(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  /* functoin index*/
  async index(req, res) {
    try {
      const gruops = await Gruop.findAll();
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
      const gruopData = await Gruop.findByPk(req.params.id);
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

      const gruop = await Gruop.findByPk(id);
      if (!gruop) {
        return res.status(400).json({
          errors: ['Grupo nao encontrada'],
        });
      }

      const newDatagruop = await Gruop.update(req.body);
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

      const gruop = await Gruop.findByPk(id);
      if (!gruop) {
        return res.status(400).json({
          errors: ['Gruop nao encontrada'],
        });
      }

      await Gruop.destroy();
      return res.status(200).json('Grupo deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new GruopController();
