const Router = require('koa-joi-router')

const router = new Router()

router.get('/', async ctx => {
  const result = await ctx.controller.article.show()
  ctx.ok(result)
})

router.get('/:id', async ctx => {
  const result = await ctx.controller.article.getArticle(ctx.params.id)
  ctx.ok(result)
})
module.exports = router
