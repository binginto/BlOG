module.exports = {
  /**
   * 获取文章数据
   */
  async show () {
    const result = await Database.Article.findAll()
    return result
  },
   /**
   * 获取文章数据
   */
  async getArticle (id) {
    const result = await Database.Article.findOne({
      where: {
        id: id
      }
    })
    return result
  }
}
