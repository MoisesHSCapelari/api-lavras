import Children from '../Models/Children';

class ChildrensController {
  /* functoin store*/

  async store(req, res) {
    try {
      const childrenNew = await Children.create({ ...req.body });

      const {
        nameChildren, age, nameGuardianOne, phone,
      } = childrenNew;
      return res.json({
        nameChildren, age, nameGuardianOne, phone,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  /* functoin index*/
  async index(req, res) {
    try {
      const childrens = await Children.findAll({
        attributes:
        ['id', 'nameChildren', 'age', 'nameGuardianOne', 'phone'],
      });
      return res.status(200).json(childrens);
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
      const childrenData = await Children.findByPk(req.params.id);
      return res.status(200).json(childrenData);
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

      const children = await Children.findByPk(id);
      if (!children) {
        return res.status(400).json({
          errors: ['Cirança nao encontrado'],
        });
      }

      const newDataChildren = await children.update(req.body);
      const {
        nameChildren, age, nameGuardianOne, phone,
      } = newDataChildren;
      return res.status(200).json({
        nameChildren, age, nameGuardianOne, phone,
      });
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

      const children = await Children.findByPk(id);
      if (!children) {
        return res.status(400).json({
          errors: ['Criança nao encontrado'],
        });
      }

      await children.destroy();
      return res.status(200).json('Criança deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ChildrensController();
