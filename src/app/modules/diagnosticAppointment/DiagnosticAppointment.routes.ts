import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DiagnosticAppointmentController } from './DiagnosticAppointment.controller';
import { DiagnosticAppointmentValidation } from './DiagnosticAppointment.validation';

const router = express.Router();

router.get('/:id', DiagnosticAppointmentController.getById);

router.get('/', DiagnosticAppointmentController.getAllFromDB);
router.post(
  '/create',
  auth(ENUM_USER_ROLE.DOCTOR),
  validateRequest(DiagnosticAppointmentValidation.createDiagnosticAppointment),
  DiagnosticAppointmentController.createDiagnosticAppointment,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.DOCTOR),
  validateRequest(DiagnosticAppointmentValidation.updateDiagnosticAppointment),
  DiagnosticAppointmentController.updateDiagnosticAppointment,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.DOCTOR),
  DiagnosticAppointmentController.deleteDiagnosticAppointment,
);

export const DiagnosticAppointmentRoutes = router;
