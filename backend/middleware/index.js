const cors = require('kcors')
const logger = require('koa-logger')
const compose = require('koa-compose')
const response = require('app/middleware/response')

module.exports = compose([
  response(),
  cors(),
  logger()
])
