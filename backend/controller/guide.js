const GuideService = require('app/service/guide')

module.exports = Controller => class GuideController extends Controller {
  /**
   * 获取指南
   */
  async show () {
    const list = await GuideService.show()
    return list
  }
}
