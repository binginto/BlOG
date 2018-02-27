const ArticleService = require('app/service/article')

module.exports = Controller => class ArticleController extends Controller {
  /**
   * 获取指南
   */
  async show () {
    const list = await ArticleService.show()
    return list
  }
   /**
   * 获取指南
   */
  async getArticle (id) {
    const list = await ArticleService.getArticle(id)
    return list
  }
}
