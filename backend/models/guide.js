module.exports = function (sequelize, DataTypes) {
  const Guide = sequelize.define('Guide', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING // 0:image 1:banner
    },
    img: {
      type: DataTypes.STRING
    }
  })
  return Guide
}
