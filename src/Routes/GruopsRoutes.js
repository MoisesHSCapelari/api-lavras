import { Router } from 'express';
import loginRequired from '../Middlewares/LoginRequired';
import GruopsController from '../Controllers/GruopsController';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, GruopsController.index);
router.get('/:id', loginRequired, GruopsController.show);

////-----------rotas Post------------
router.post('/', loginRequired, GruopsController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, GruopsController.update);

//-----------rotas delete------------
router.delete('/:id', loginRequired, GruopsController.delete);

export default router;
