import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AssetController } from './Asset.controller';
import { AssetValidation } from './Asset.validation';

const router = express.Router();

router.get('/:id', AssetController.getById);
router.get('/', AssetController.getAllFromDB);

router.post(
  '/create',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(AssetValidation.createAsset),
  AssetController.createAsset,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(AssetValidation.updateAsset),
  AssetController.updateAsset,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AssetController.deleteAsset);

export const AssetRoutes = router;
