import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DepartmentController } from './Department.controller';
import { DepartmentValidation } from './Department.validation';

const router = express.Router();

router.get('/:id', DepartmentController.getById);
router.get('/', DepartmentController.getAllFromDB);

router.post(
  '/create',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(DepartmentValidation.createDepartment),
  DepartmentController.createDepartment,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(DepartmentValidation.updateDepartment),
  DepartmentController.updateDepartment,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  DepartmentController.deleteDepartment,
);

export const DepartmentRoutes = router;
