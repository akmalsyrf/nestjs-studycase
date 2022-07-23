import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      message: exception.message || null,
    };
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      console.error(exception.stack);
    }
    response.status(status).json(errorResponse);
  }
}
