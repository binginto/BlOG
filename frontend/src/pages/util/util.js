module.exports = {
  format (createdAt) {
    var timeItem = new Date(createdAt).toString()
    var data = timeItem.split(' ')
    var result = data[1] + ',' + data[2] + ',' + data[3]
    return result
  },
  getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.hash.split('?')[1].match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  }
}
