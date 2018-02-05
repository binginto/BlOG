const config = require('config')
const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')
const errors = require('./error')

module.exports = class Controller {
  constructor () {
    // 直接通过 this.config 读取配置
    this.config = config

    /**
     * 签发一个 token
     * @param {String} id 用户 ID
     * @param {Number} role 用户权限等级
     * @param {Number} exp 过期时间
     */
    this.issue = function (id, role, exp = (new Date().getTime() + JwtConfig.exp) / 1000) {
      return jwt.sign({
        id,
        role,
        exp
      }, JwtConfig.secret)
    }

    // 直接通过 this.errorName 读取自定义错误
    Object.keys(errors).forEach(errorName => {
      this[errorName] = errors[errorName]
    })
  }
}
