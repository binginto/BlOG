const Router = require('koa-joi-router')

const router = new Router()

router.get('/', async ctx => {
  const result = await ctx.controller.guide.show()
  ctx.ok(result)
})

module.exports = router
