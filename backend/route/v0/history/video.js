const Router = require('koa-joi-router')

const router = new Router()

router.get('/', async ctx => {
  const video = await ctx.controller.video.show()
  ctx.ok(video)
})

module.exports = router
