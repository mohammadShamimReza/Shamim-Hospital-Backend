"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Staff_controller_1 = require("./Staff.controller");
const Staff_validation_1 = require("./Staff.validation");
const router = express_1.default.Router();
router.get('/:id', Staff_controller_1.StaffController.getById);
router.get('/', Staff_controller_1.StaffController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Staff_validation_1.StaffValidation.createStaff), Staff_controller_1.StaffController.createStaff);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Staff_validation_1.StaffValidation.updateStaff), Staff_controller_1.StaffController.updateStaff);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Staff_controller_1.StaffController.deleteStaff);
exports.StaffRoutes = router;
