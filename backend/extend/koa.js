const controllers = require('require-dir')('../controller', { recurse: true })
const Controller = require('./controller')

// 扩展 Koa Context 方法
module.exports = function (app) {
  /**
   * 快速设置 ctx.body
   * @param {*} data 数据
   * @param {*} message 消息
   */
  app.context.ok = function (data) {
    this.body = { status: 'success', data }
  }

  /**
   * 快速设置 ctx.body
   * @param {*} data 数据
   * @param {*} message 消息
   */
  app.context.fail = function (message, status) {
    this.status = status || 400
    this.body = { status: 'fail', message }
  }

  /**
   * 快速设置 ctx.body
   * @param {*} data 数据
   * @param {*} message 消息
   */
  app.context.error = function (message, status) {
    this.status = status || 400
    this.body = { status: 'error', message }
  }

  app.context.excel = function (result) {
    const res = this.response
    this.type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    res.attachment(`${result.fileName}.xlsx`)
    this.body = result.data
  }

  /**
   * 在 ctx.controller 上绑定全部 controllers
   * 两层 controller
   */
  app.context.controller = controllers
  app.context.Database = Database
  Object.keys(controllers).forEach(controllerName => {
    if (typeof controllers[controllerName] === 'function') {
      app.context.controller[controllerName] = new (controllers[controllerName](Controller))()
    } else {
      Object.keys(controllers[controllerName]).forEach(deepControllerName => {
        if (typeof controllers[controllerName][deepControllerName] === 'function') {
          app.context.controller[controllerName][deepControllerName] = new (controllers[controllerName][deepControllerName](Controller))()
        }
      })
    }
  })
  return app
}
