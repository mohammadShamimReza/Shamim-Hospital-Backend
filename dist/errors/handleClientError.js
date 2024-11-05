"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleClientError = (error) => {
    var _a, _b;
    let errors = [];
    let message = '';
    const statusCode = 400;
    if (error.code === 'P2025') {
        message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || 'Record not found';
        errors = [
            {
                path: '',
                message,
            },
        ];
    }
    else if (error.code === 'P2003') {
        if (error.message.includes('delete()` invocation:')) {
            message = 'Delete failed';
            errors = [
                {
                    path: '',
                    message,
                },
            ];
        }
    }
    else if (error.code === 'P2002') {
        message = `${(_b = error.meta) === null || _b === void 0 ? void 0 : _b.target} is already used`;
        errors = [
            {
                path: '',
                message,
            },
        ];
    }
    console.log(message);
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleClientError;
