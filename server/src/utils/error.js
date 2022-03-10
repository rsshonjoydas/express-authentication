class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    return 400;
  }
}

class BedRequest extends GeneralError {
  constructor(message) {
    super(message);
    this.name = "Bed Request";
  }

  getCode() {
    return 400;
  }
}

class NotFound extends GeneralError {
  constructor(message) {
    super(message);
    this.name = "Not Found";
  }

  getCode() {
    return 404;
  }
}

export default { GeneralError, BedRequest, NotFound };
