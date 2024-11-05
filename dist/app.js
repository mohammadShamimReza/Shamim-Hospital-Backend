"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_js_1 = __importDefault(require("./app/middleware/globalErrorHandler.js"));
const index_js_1 = __importDefault(require("./app/routes/index.js"));
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)());
// Parser
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', index_js_1.default);
// Global error handler
app.use(globalErrorHandler_js_1.default);
app.use((req, res, next) => {
    res.status(500).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
