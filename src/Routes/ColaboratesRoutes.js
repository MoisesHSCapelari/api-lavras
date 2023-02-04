import { Router } from 'express';
import loginRequired from '../Middlewares/LoginRequired';
import ColaboratesController from '../Controllers/ColaboratesController';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, ColaboratesController.index);
router.get('/:id', loginRequired, ColaboratesController.show);

////-----------rotas Post------------
router.post('/', loginRequired, ColaboratesController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, ColaboratesController.update);

//-----------rotas delete------------
router.delete('/:id', loginRequired, ColaboratesController.delete);

export default router;
