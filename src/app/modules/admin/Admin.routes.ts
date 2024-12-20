import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AdminController } from './Admin.controller';
import { AdminValidation } from './Admin.validation';

const router = express.Router();

router.get('/:id', AdminController.getById);
router.get('/', AdminController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.createAdmin),
  AdminController.createAdmin,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AdminController.deleteAdmin);

export const AdminRoutes = router;
