"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json({
      TudoOk: true,
    });
  }
}

exports. default = new HomeController();
