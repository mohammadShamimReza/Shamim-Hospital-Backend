"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NurseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Nurse_controller_1 = require("./Nurse.controller");
const Nurse_validation_1 = require("./Nurse.validation");
const router = express_1.default.Router();
router.get('/:id', Nurse_controller_1.NurseController.getById);
router.get('/', Nurse_controller_1.NurseController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Nurse_validation_1.NurseValidation.createNurse), Nurse_controller_1.NurseController.createNurse);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Nurse_validation_1.NurseValidation.updateNurse), Nurse_controller_1.NurseController.updateNurse);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Nurse_controller_1.NurseController.deleteNurse);
exports.NurseRoutes = router;
