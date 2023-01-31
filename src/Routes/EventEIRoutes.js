import { Router } from 'express';
import EventEIController from '../Controllers/EventEIController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, EventEIController.index);
router.get('/:id', loginRequired, EventEIController.show);

////-----------rotas Post------------
router.post('/', loginRequired, EventEIController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, EventEIController.update);

//-----------rotas delete------------
//router.delete('/:id', loginRequired, EventEIController.delete);

export default router;
