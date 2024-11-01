import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler.js';
import router from './app/routes/index.js';
const app = express();
// CORS configuration
app.use(cors());
// Parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
// Global error handler
app.use(globalErrorHandler);
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
export default app;
