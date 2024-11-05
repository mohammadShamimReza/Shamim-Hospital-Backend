"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Notice_controller_1 = require("./Notice.controller");
const Notice_validation_1 = require("./Notice.validation");
const router = express_1.default.Router();
router.get('/:id', Notice_controller_1.NoticeController.getById);
router.get('/', Notice_controller_1.NoticeController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Notice_validation_1.NoticeValidation.createNotice), Notice_controller_1.NoticeController.createNotice);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Notice_validation_1.NoticeValidation.updateNotice), Notice_controller_1.NoticeController.updateNotice);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Notice_controller_1.NoticeController.deleteNotice);
exports.NoticeRoutes = router;
