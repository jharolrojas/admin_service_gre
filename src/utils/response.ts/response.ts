import { Response } from 'express';

export class ApiResponse {
  static success<T>(res: Response, data: T, message = 'Success'): void {
    res.status(200).json({
      status: true,
      message,
      data,
    });
  }

  static error(res: Response, error: any, message = 'An error occurred', statusCode = 500): void {
    res.status(statusCode).json({
      status: 'error',
      message,
      error: error instanceof Error ? error.message : error,
    });
  }

  static notFound(res: Response, message = 'Resource not found'): void {
    res.status(404).json({
      status: 'error',
      message,
    });
  }

  static validationError(res: Response, errors: any, message = 'Validation errors'): void {
    res.status(400).json({
      status: 'error',
      message,
      errors,
    });
  }
}

export default ApiResponse;
