import { Router } from 'express';
import UploadController from '../Controllers/UploadController';
import loginRequired from '../Middlewares/LoginRequired';

const router = new Router();

router.post('/', loginRequired, UploadController.store);
export default router;
