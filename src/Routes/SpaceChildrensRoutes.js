import { Router } from 'express';
import SpaceChildrenController from '../Controllers/SpaceChildrenController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, SpaceChildrenController.index);
router.get('/:id', loginRequired, SpaceChildrenController.show);

////-----------rotas Post------------
router.post('/', loginRequired, SpaceChildrenController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, SpaceChildrenController.update);

//-----------rotas delete------------
//router.delete('/:id', loginRequired, SpaceChildrenController.delete);

export default router;
