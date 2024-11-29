// src/utils/AppError.ts

export class AppError extends Error {
    statusCode: number;
    isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message); // Pass message to the parent Error class

        this.statusCode = statusCode;
        this.isOperational = true; // Custom property to indicate operational errors (handled errors)

        // Capturing the stack trace helps in debugging
        Error.captureStackTrace(this, this.constructor);
    }
}
