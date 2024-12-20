import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DoctorController } from './Doctor.controller';
import { DoctorValidation } from './Doctor.validation';

const router = express.Router();

router.get('/:id', DoctorController.getById);

router.get('/', DoctorController.getAllFromDB);
router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(DoctorValidation.createDoctor),
  DoctorController.createDoctor,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.DOCTOR),
  validateRequest(DoctorValidation.updateDoctor),
  DoctorController.updateDoctor,
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), DoctorController.deleteDoctor);

export const DoctorRoutes = router;
