global.Promise = require('bluebird')

require('app/helper/config-env')
require('app/database')

const Koa = require('koa')
// const jwt = require('koa-jwt')
const { Port, Env } = require('config')
// const JwtConfig = require('config').get('Jwt')

const middlewares = require('app/middleware')
const router = require('app/route')

const app = new Koa()

// 扩展 ctx 方法
require('app/extend/koa')(app)

// 中间件
app.use(middlewares)

// JWT
// app.use(jwt({
//   secret: JwtConfig.secret
// }))

app.use(router.middleware())

module.exports = global.app = app.listen(Port, () => {
  console.log(`运行端口: ${Port}\n运行环境: ${Env}`)
})
