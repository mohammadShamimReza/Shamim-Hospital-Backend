"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Asset_controller_1 = require("./Asset.controller");
const Asset_validation_1 = require("./Asset.validation");
const router = express_1.default.Router();
router.get('/:id', Asset_controller_1.AssetController.getById);
router.get('/', Asset_controller_1.AssetController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Asset_validation_1.AssetValidation.createAsset), Asset_controller_1.AssetController.createAsset);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Asset_validation_1.AssetValidation.updateAsset), Asset_controller_1.AssetController.updateAsset);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Asset_controller_1.AssetController.deleteAsset);
exports.AssetRoutes = router;
