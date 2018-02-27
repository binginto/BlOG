module.exports = function (sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING // 0:image 1:banner
    },
    title: {
      type: DataTypes.STRING
    },
    banner: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    introduction: {
      type: DataTypes.TEXT
    },
    content: {
      type: DataTypes.TEXT('long')
    }
  })
  return Article
}
