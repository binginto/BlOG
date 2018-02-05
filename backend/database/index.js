const { sequelize, Sequelize } = require('./sequelize')
const fs = require('fs')
const path = require('path')
const Utils = require('../library/utils')
const db = {}

fs.readdirSync(path.resolve(__dirname, '../models')).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
}).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, '../models', file))
  // 将 model 名大驼峰化
  db[Utils.bigCamelize(model.name)] = model
})

if (!process.env.mock) {
  Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db)
    }
  })
}

db.sequelize = sequelize
db.Sequelize = Sequelize
db.Random = require('mockjs').Random
global.Database = db
module.exports = db
