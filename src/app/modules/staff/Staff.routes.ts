import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { StaffController } from './Staff.controller';
import { StaffValidation } from './Staff.validation';

const router = express.Router();

router.get('/:id', StaffController.getById);
router.get('/', StaffController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(StaffValidation.createStaff),
  StaffController.createStaff,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.Staff),
  validateRequest(StaffValidation.updateStaff),
  StaffController.updateStaff,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), StaffController.deleteStaff);

export const StaffRoutes = router;
