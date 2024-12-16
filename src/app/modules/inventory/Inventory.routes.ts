import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { InventoryController } from './Inventory.controller';
import { InventoryValidation } from './Inventory.validation';

const router = express.Router();

router.get('/:id', InventoryController.getById);
router.get('/', InventoryController.getAllFromDB);

router.post(
  '/create',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(InventoryValidation.createInventory),
  InventoryController.createInventory,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(InventoryValidation.updateInventory),
  InventoryController.updateInventory,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  InventoryController.deleteInventory,
);

export const InventoryRoutes = router;
