import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DiagnosticController } from './Diagonistic.controller';
import { DiagnosticValidation } from './Diagonistic.validation';

const router = express.Router();

router.get('/:id', DiagnosticController.getById);
router.get('/', DiagnosticController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(DiagnosticValidation.createDiagnostic),
  DiagnosticController.createDiagnostic,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(DiagnosticValidation.updateDiagnostic),
  DiagnosticController.updateDiagnostic,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  DiagnosticController.deleteDiagnostic,
);

export const DiagnosticRoutes = router;
