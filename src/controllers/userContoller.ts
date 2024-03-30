import { type Request, type Response } from 'express';
import { getUserById } from '../services/userService';
import { ProblemDetailError } from '../utils/ProblemDetailError';
import * as httpStatusCode from '../config/httpStatusCodes';

export const getUserProfile = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = getUserById(id);

  if (!user) {
    throw new ProblemDetailError(
      httpStatusCode.HTTP_STATUS_OK,
      '',
      'Not Found',
      'The requested item was not found.'
    );
  }
  return res.status(httpStatusCode.HTTP_STATUS_OK).send(user);
};
