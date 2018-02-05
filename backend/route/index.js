const Router = require('koa-router')

const router = new Router({
  prefix: ''
})

const mRouters = require('node-require-directory')(__dirname)

/**
 * 自动配置路由
 * @param {Object} routers
 * @param {String} prefix
 */
function setupRouters (routers, prefix = '/') {
  Object.keys(routers).forEach(function (key) {
    if (key === 'index' || !routers[key]) return
    const _prefix = prefix + key
    if (!(routers[key].middleware)) {
      setupRouters(routers[key], _prefix + '/')
      return
    }
    router.use(_prefix, routers[key].middleware())
  })
}

setupRouters(mRouters)

module.exports = router
