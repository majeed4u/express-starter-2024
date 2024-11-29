// src/middlewares/notFoundHandler.ts

import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).send('Resource Not Found');
};

export default notFoundHandler;
