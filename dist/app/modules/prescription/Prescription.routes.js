import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PrescriptionValidation } from './Prescription.validatoin';
import { PrescriptionController } from './Prescription.conroller';
const router = express.Router();
router.get('/:id', PrescriptionController.getById);
router.get('/', PrescriptionController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
validateRequest(PrescriptionValidation.createPrescription), PrescriptionController.createPrescription);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), validateRequest(PrescriptionValidation.updatePrescription), PrescriptionController.updatePrescription);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), PrescriptionController.deletePrescription);
export const PrescriptionRoutes = router;
