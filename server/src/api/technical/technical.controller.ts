import type { NextFunction, Request, Response } from 'express';

export const registerTechnicalHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const technical = await registerTechnical(req.body);
        return res.status(201).json(technical);
    } catch (error) {
        next(error);
    }
}