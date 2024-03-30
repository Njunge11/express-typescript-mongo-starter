import { type NextFunction, type Request, type Response } from 'express';
import { ProblemDetailError } from '../utils/ProblemDetailError';
import * as httpStatusCode from '../config/httpStatusCodes';

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ProblemDetailError) {
    const responseBody: any = {
      type: 'about:blank',
      title: err.title,
      status: err.status,
      detail: err.detail,
      ...(err.instance != null && { instance: err.instance })
    };
    res.status(err.status).json(responseBody);
  } else {
    res.status(httpStatusCode.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
      type: 'about:blank',
      title: 'Internal Server Error',
      status: httpStatusCode.HTTP_STATUS_INTERNAL_SERVER_ERROR
    });
  }
};
