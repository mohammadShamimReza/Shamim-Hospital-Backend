import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { ServiceController } from './Service.controller';
import { ServiceValidation } from './Service.validation';

const router = express.Router();

router.get('/:id', ServiceController.getById);
router.get('/', ServiceController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ServiceValidation.createService),
  ServiceController.createService,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ServiceValidation.updateService),
  ServiceController.updateService,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteService,
);

export const ServiceRoutes = router;
