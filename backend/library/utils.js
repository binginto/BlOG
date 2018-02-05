/**
 * 小驼峰法
 * @param {String} str
 */
function camelize (str) {
  return str.trim().replace(/[-_\s]+(.)?/g, (match, c) => c.toUpperCase())
}

/**
 * 大驼峰法，首字母大写
 * @param {String} str
 */
function bigCamelize (str) {
  return str.trim().replace(/(\w)/, first => first.toUpperCase()).replace(/[-_\s]+(.)?/g, (match, c) => c.toUpperCase())
}

module.exports = {
  camelize,
  bigCamelize
}
