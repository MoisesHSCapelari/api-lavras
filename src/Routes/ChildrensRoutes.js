import { Router } from 'express';
import ChildrensController from '../Controllers/ChildrensController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, ChildrensController.index);
router.get('/:id', loginRequired, ChildrensController.show);

////-----------rotas Post------------
router.post('/', loginRequired, ChildrensController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, ChildrensController.update);

//-----------rotas delete------------
router.delete('/:id', loginRequired, ChildrensController.delete);

export default router;
