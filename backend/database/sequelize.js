const databaseConfig = require('config').get('Database')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const operatorsAliases = {
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $in: Op.in,
  $ne: Op.ne
}
const sequelize = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  dialect: databaseConfig.dialect,
  dialectOptions: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: eval(databaseConfig.logging), // eslint-disable-line
  benchmark: false,
  operatorsAliases
})

sequelize.authenticate().then(() => {
  console.log('Sequelize 连接成功')
}).catch((e) => {
  console.log('Sequelize 连接失败，错误：', e)
})

const { Random } = require('mockjs')
const uuid = require('uuid')

/**
 * 根据 Sequelize 的类型生成随机数据
 * @param {String} key
 * @param {Sequelize.DataType} type
 */
const randomByType = function (key, type) {
  const ignoreKey = ['createdAt', 'updatedAt', 'deletedAt', 'id']
  if (ignoreKey.includes(key)) return null
  if (key === 'phone') return Random.string('number', 11, 11)

  if (type instanceof Sequelize.DATE ||
    type instanceof Sequelize.TIME) {
    return Random.date()
  } else if (type instanceof Sequelize.STRING ||
    type instanceof Sequelize.CHAR ||
    type instanceof Sequelize.TEXT) {
    return type._length ? Random.name(type._length) : Random.name()
  } else if (type instanceof Sequelize.NUMBER ||
    type instanceof Sequelize.BIGINT) {
    return type._length ? Random.integer(0, type._length) : Random.integer(0, 100)
  } else if (type instanceof Sequelize.BOOLEAN) {
    return Random.boolean()
  } else if (type instanceof Sequelize.FLOAT ||
    type instanceof Sequelize.DOUBLE) {
    return Random.float()
  } else if (type instanceof Sequelize.UUID ||
   type instanceof Sequelize.UUIDV1) {
    return uuid.v1()
  } else if (type instanceof Sequelize.UUIDV4) {
    return uuid.v4()
  }
}

sequelize.addHook('afterDefine', 'createMockFunction', function (model) {
  model._random = function (obj) {
    if (obj && typeof obj === 'function') obj = obj(Random)
    const attrs = model.rawAttributes
    let data = {}
    for (const key in attrs) {
      const value = randomByType(key, attrs[key].type)
      if (value) data[key] = value
    }
    if (obj) {
      data = Object.assign(data, obj)
    }
    return data
  }
  /**
   * 根据类型自动随机数据功能开关
   * @param {Boolean} autoRandom
   */
  model.autoRandom = function (autoRandom) {
    this._closeAutoRandom = !autoRandom
  }
  /**
   * 创建一组随机数据
   */
  model.mock = async function (...items) {
    return await Promise.all(items.map(item => {
      // 根据数据类型自动随机数据
      let data = model._closeAutoRandom ? item : Object.assign(model._random(), item)
      // 若自定义了 random 函数，使用自定义 random 函数
      if ('random' in model) {
        if (typeof model.random === 'function') data = Object.assign(data, model.random(Random))
        else throw new Error(`${model.name}.random should be funciton for mocking data`)
      }
      return model.create(data)
    }))
  }
  /**
   * 创建单个随机数据
   * @param {Object} item 选填
   */
  model.mockOne = async function (item) {
    return (await model.mock(item || {}))[0]
  }
})

module.exports = {
  sequelize,
  Sequelize
}
