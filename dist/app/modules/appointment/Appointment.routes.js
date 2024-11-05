import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AppointmentController } from './Appointment.controller';
import { AppointmentValidation } from './Appointment.validation';
const router = express.Router();
router.get('/:id', AppointmentController.getById);
router.get('/', AppointmentController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
validateRequest(AppointmentValidation.createAppointment), AppointmentController.createAppointment);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
validateRequest(AppointmentValidation.updateAppointment), AppointmentController.updateAppointment);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AppointmentController.deleteAppointment);
export const AppointmentRoutes = router;
