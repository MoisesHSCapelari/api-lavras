import { Router } from 'express';
import UserController from '../Controllers/UserController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, UserController.index);
router.get('/:id', loginRequired, UserController.show);

////-----------rotas Post------------
router.post('/', UserController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, UserController.update);

//-----------rotas delete------------
router.delete('/:id', loginRequired, UserController.delete);

export default router;
