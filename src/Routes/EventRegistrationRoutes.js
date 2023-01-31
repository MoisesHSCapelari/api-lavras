import { Router } from 'express';
import EventRegistrationController from '../Controllers/EventRegistrationController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

//-----------rotas get------------
router.get('/', loginRequired, EventRegistrationController.index);
router.get('/:id', loginRequired, EventRegistrationController.show);

////-----------rotas Post------------
router.post('/', loginRequired, EventRegistrationController.store);

//-----------rotas Put------------
router.put('/:id', loginRequired, EventRegistrationController.update);

//-----------rotas delete------------
//router.delete('/:id', loginRequired, EventEIController.delete);

export default router;
