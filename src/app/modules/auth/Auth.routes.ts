import express from 'express';

import auth from '../../middleware/auth.js';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './Auth.validation';
import { AuthController } from './Auth.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.create),
  AuthController.signUp,
);
router.post(
  '/login',
  validateRequest(AuthValidation.login),
  AuthController.logIn,
);

router.get(
  '/me',
  AuthController.me,
);

router.patch(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  AuthController.changePassword,
);

router.post('/forgot-password', AuthController.forgotPass);

router.post('/reset-password', AuthController.resetPassword);

export const authRoutes = router;
