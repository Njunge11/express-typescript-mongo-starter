import { type Request, type Response, type NextFunction } from 'express';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) == null) {
    return res.status(400).send({ message: 'Invalid ID format' });
  }
  next();
};
