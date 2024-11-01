import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { StaffController } from './User.controller';
import { StaffValidation } from './User.validation';

const router = express.Router();

router.get('/:id', StaffController.getById);
router.get('/', StaffController.getAllFromDB);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(StaffValidation.updateStaff),
  StaffController.updateUser,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), StaffController.deleteUser);

export const UserRoutes = router;
