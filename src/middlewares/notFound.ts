import { NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction): void {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}
