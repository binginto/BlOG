module.exports = {
  /**
   * 获取指南
   */
  async show () {
    const guide = await Database.Guide.findAll({
      order: [['status', 'desc']]
    })
    return guide
  }
}
