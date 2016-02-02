'use strict'

let canCapture = (typeof Error.captureStackTrace === 'function')
let canStack = !!(new Error()).stack

function ErrorAbstract (msg, status, err, constructor) {
  this.message = msg

  // Used for chaining errors
  this.next = err

  Error.call(this, this.message)

  if (canCapture) {
    Error.captureStackTrace(this, constructor)
  } else if (canStack) {
    this.stack = (new Error()).stack
  } else {
    this.stack = ''
  }

  this.status = status ? status : 500
}

module.exports = ErrorAbstract
