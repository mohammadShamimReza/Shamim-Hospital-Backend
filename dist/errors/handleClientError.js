const handleClientError = (error) => {
    let errors = [];
    let message = '';
    const statusCode = 400;
    if (error.code === 'P2025') {
        message = error.meta?.cause || 'Record not found';
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
        message = `${error.meta?.target} is already used`;
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
export default handleClientError;
