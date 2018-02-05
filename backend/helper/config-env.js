const config = require('config')
module.exports = config.get = new Proxy(config.get, {
  apply: function (target, ctx, args) {
    const origin = Reflect.apply(...arguments)
    const ret = JSON.parse(JSON.stringify(origin))
    for (const key in ret) {
      if (typeof ret[key] === 'string' && /^ENV:/.test(ret[key])) {
        const array = ret[key].split(':')
        ret[key] = process.env[array[1]]
      }
    }
    return ret
  }
})
