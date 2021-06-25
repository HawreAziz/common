import { CustomError } from './custom-error';


export class AuthorizationError extends CustomError {
  statusCode = 404;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, AuthorizationError);
  }

  serializeError() {
    return [{
      message: this.message
    }]
  }
}
