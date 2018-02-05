// 错误和响应处理
module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.status === 500 || e.status === undefined) console.error(e)
    ctx.status = e.status || 500
    ctx.body = {
      status: e.response,
      message: e.message
    }
  }
}
