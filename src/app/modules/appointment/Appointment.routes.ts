import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AppointmentController } from './Appointment.controller';
import { AppointmentValidation } from './Appointment.validation';

const router = express.Router();

router.get('/:id', AppointmentController.getById);
router.get('/user/:id', AppointmentController.getAllAppointmentByUserId);



router.get('/', AppointmentController.getAllFromDB);
router.post(
  '/create',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(AppointmentValidation.createAppointment),
  AppointmentController.createAppointment,
);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.DOCTOR,
    ENUM_USER_ROLE.Staff,
  ),
  validateRequest(AppointmentValidation.updateAppointment),
  AppointmentController.updateAppointment,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.Staff),
  AppointmentController.deleteAppointment,
);

export const AppointmentRoutes = router;
