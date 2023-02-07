"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SpaceChildrenController = require('../Controllers/SpaceChildrenController'); var _SpaceChildrenController2 = _interopRequireDefault(_SpaceChildrenController);
var _LoginRequired = require('../Middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

//-----------rotas get------------
router.get('/', _LoginRequired2.default, _SpaceChildrenController2.default.index);
router.get('/:id', _LoginRequired2.default, _SpaceChildrenController2.default.show);

////-----------rotas Post------------
router.post('/', _LoginRequired2.default, _SpaceChildrenController2.default.store);

//-----------rotas Put------------
router.put('/:id', _LoginRequired2.default, _SpaceChildrenController2.default.update);

//-----------rotas delete------------
//router.delete('/:id', loginRequired, SpaceChildrenController.delete);

exports. default = router;
