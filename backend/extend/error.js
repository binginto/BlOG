class BadRequestError extends Error {
  constructor (message) {
    super()
    this.name = '参数验证失败'
    this.message = message
    this.status = 400
    this.response = 'fail'
  }
}

class AuthError extends Error {
  constructor (message) {
    super()
    this.name = '认证失败'
    this.message = message
    this.status = 401
    this.response = 'fail'
  }
}

class PermissionDeniedError extends Error {
  constructor (message) {
    super()
    this.message = message || '权限不足'
    this.status = 403
    this.response = 'fail'
  }
}

class ForbiddenError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 403
    this.response = 'error'
  }
}

class NotFoundError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 404
    this.response = 'error'
  }
}

class ServiceUnavailableError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 503
    this.response = 'error'
  }
}

module.exports = {
  BadRequestError,
  AuthError,
  PermissionDeniedError,
  ForbiddenError,
  NotFoundError,
  ServiceUnavailableError
}
