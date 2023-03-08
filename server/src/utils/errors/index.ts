interface ErrorCode {
  getCode(): number;
}

export class GeneralError extends Error implements ErrorCode {
  constructor({ message }: { message: string }) {
    super(message);
  }

  getCode(): number {
    return 400;
  }
}

export class BadRequest extends GeneralError {
  constructor(message: string) {
    super({ message });
    this.name = 'Bad Request';
  }

  getCode(): number {
    return 400;
  }
}

export class NotFound extends GeneralError {
  constructor(message: string) {
    super({ message });
    this.name = 'Not Found';
  }

  getCode(): number {
    return 404;
  }
}
