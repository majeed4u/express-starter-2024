import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '@/utils/appError'; // Import your custom error class
import logger from '@/utils/logger';

// Define the error handler middleware using `ErrorRequestHandler` type
const serverErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // If the error is an instance of AppError (your custom error)
    if (err instanceof AppError) {
        // Log the custom error message and status code
        logger.error(`${err.statusCode} - ${err.message}`);
        res.status(err.statusCode).send(err.message); // Send the custom error message and status code
    } else {
        // Handle unexpected errors (non-operational errors)
        logger.error(err.stack); // Log full error details for debugging
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong on the server');
    }
    // No explicit return here; just modify the response
};

export default serverErrorHandler;
