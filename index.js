'use strict'
require('logger')
let util = require('util')
let _ = require('underscore')
let errors = module.exports
let AbstractError = require('./abstract.error')

errors._Abstract = AbstractError
util.inherits(AbstractError, Error)

/**
 * Missing Parameter Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.MissingParameter = function MissingParameter (msg, err) {
  AbstractError.call(this, msg || 'Missing Parameter', null, err, errors.MissingParameter)
}
util.inherits(errors.MissingParameter, AbstractError)

/**
 * Validation  Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.Validation = function Validation (msg, err) {
  AbstractError.call(this, msg || 'Validation Error', 422, err, errors.Validation)
}
util.inherits(errors.Validation, AbstractError)

/**
 * Illegal Parameter Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.IllegalParameter = function IllegalParameter (msg, err) {
  AbstractError.call(this, msg || 'Illegal Parameter', null, err, errors.IllegalParameter)
}
util.inherits(errors.IllegalParameter, AbstractError)

/**
 * Bad Payload Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.BadPayload = function BadPayload (msg, err) {
  AbstractError.call(this, msg || 'Bad Payload', null, err, errors.BadPayload)
}
util.inherits(errors.BadPayload, AbstractError)

/**
 * Already Exists Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.AlreadyExists = function AlreadyExists (msg, err) {
  AbstractError.call(this, msg || 'Already Exists', null, err, errors.AlreadyExists)
}
util.inherits(errors.AlreadyExists, AbstractError)

/**
 * Generic Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.Generic = function Generic (msg, err) {
  AbstractError.call(this, msg || 'Generic Error', 500, err, errors.Generic)
}
util.inherits(errors.Generic, AbstractError)

let statusCodes = {

  /**
   * GatewayTimeout
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  504: 'Gateway Timeout',

  /**
   * ServiceUnavailable
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  503: 'Service Unavailable',

  /**
   * InternalServerError
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  500: 'Internal Server Error',

  /**
   * ValidationError
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  422: 'Validation Error',

  /**
   * PreconditionFailed
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  412: 'Precondition Failed',

  /**
   * Conflict
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  409: 'Conflict',

  /**
   * Conflict
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  408: 'Request Timeout',

  /**
   * AuthorizationException
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  403: 'Authorization Exception',

  /**
   * NotFound
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  404: 'Not Found',

  /**
   * AuthenticationException
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  401: 'Authentication Exception',

  /**
   * BadRequest
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  400: 'Bad Request',

  /**
   * MovedPermanently
   * @param {String} [msg] - An error message that will probably end up in a log.
   */
  301: 'Moved Permanently'
}

_.each(statusCodes, function (name, status) {
  let className = name.split(' ').join()

  function StatusCodeError (msg, err) {
    AbstractError.call(this, msg || name, status, err, StatusCodeError)
  }

  util.inherits(StatusCodeError, AbstractError)
  errors[className] = StatusCodeError
  errors[status] = StatusCodeError
})
