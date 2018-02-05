const Router = require('koa-joi-router')

const router = new Router()

router.get('/', async ctx => {
  const graphic = await ctx.controller.graphic.show()
  ctx.ok(graphic)
})

module.exports = router
