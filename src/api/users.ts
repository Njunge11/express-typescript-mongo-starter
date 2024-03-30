import { Router } from 'express';
import { getUserProfile } from '../controllers/userContoller';
import { validateUser } from '../middlewares/userValidation';

const router = Router();

router.get('/:id', validateUser, getUserProfile);

export default router;
