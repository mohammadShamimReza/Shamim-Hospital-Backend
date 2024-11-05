"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Admin_controller_1 = require("./Admin.controller");
const Admin_validation_1 = require("./Admin.validation");
const router = express_1.default.Router();
router.get('/:id', Admin_controller_1.AdminController.getById);
router.get('/', Admin_controller_1.AdminController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN),
(0, validateRequest_1.default)(Admin_validation_1.AdminValidation.createAdmin), Admin_controller_1.AdminController.createAdmin);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN),
(0, validateRequest_1.default)(Admin_validation_1.AdminValidation.updateAdmin), Admin_controller_1.AdminController.updateAdmin);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), Admin_controller_1.AdminController.deleteAdmin);
exports.AdminRoutes = router;
