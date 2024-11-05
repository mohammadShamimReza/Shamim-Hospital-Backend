"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Service_controller_1 = require("./Service.controller");
const Service_validation_1 = require("./Service.validation");
const router = express_1.default.Router();
router.get('/:id', Service_controller_1.ServiceController.getById);
router.get('/', Service_controller_1.ServiceController.getAllFromDB);
router.post('/create', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Service_validation_1.ServiceValidation.createService), Service_controller_1.ServiceController.createService);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Service_validation_1.ServiceValidation.updateService), Service_controller_1.ServiceController.updateService);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Service_controller_1.ServiceController.deleteService);
exports.ServiceRoutes = router;
