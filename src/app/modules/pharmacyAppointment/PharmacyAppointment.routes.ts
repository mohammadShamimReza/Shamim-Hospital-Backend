import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PharmacyAppointmentController } from './PharmacyAppointment.controller';
import { PharmacyOnAppointmentValidation } from './PharmacyAppointment.validation';

const router = express.Router();

router.get('/:id', PharmacyAppointmentController.getById);

router.get('/', PharmacyAppointmentController.getAllFromDB);
router.post(
  '/create',
  auth(ENUM_USER_ROLE.DOCTOR),
  validateRequest(PharmacyOnAppointmentValidation.createPharmacyOnAppointment),
  PharmacyAppointmentController.createPharmacyAppointment,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.DOCTOR, ENUM_USER_ROLE.Staff),
  validateRequest(PharmacyOnAppointmentValidation.updatePharmacyOnAppointment),
  PharmacyAppointmentController.updatePharmacyAppointment,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.DOCTOR, ENUM_USER_ROLE.Staff),
  PharmacyAppointmentController.deletePharmacyAppointment,
);

export const PharmacyAppointmentRoutes = router;
