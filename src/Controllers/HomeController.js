class HomeController {
  async index(req, res) {
    res.json({
      TudoOk: true,
    });
  }
}

export default new HomeController();
