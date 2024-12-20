import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { LabAppointmentController } from './LabAppointment.controller';
import { LabAppointmentValidation } from './LabAppointment.validation';

const router = express.Router();

router.get('/:id', LabAppointmentController.getById);

router.get('/', LabAppointmentController.getAllFromDB);
router.post(
  '/create',
  auth(ENUM_USER_ROLE.DOCTOR),
  validateRequest(LabAppointmentValidation.createLabAppointment),
  LabAppointmentController.createLabAppointment,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.DOCTOR),
  validateRequest(LabAppointmentValidation.updateLabAppointment),
  LabAppointmentController.updateLabAppointment,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.DOCTOR),
  LabAppointmentController.deleteLabAppointment,
);

export const LabAppointmentRoutes = router;
