type ErrorMessage = {
    statusCode: number;
    data: null;
    success: boolean;
    error: any;
};

class ApiError extends Error {
    statusCode: number;
    data: null;
    success: boolean;
    error: any;

    constructor(
        statusCode: number,
        message: string,
        error: any = [],
        stack?: string
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.error = error;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
