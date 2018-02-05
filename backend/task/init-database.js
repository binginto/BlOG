const Database = require('app/database')
process.env.mock = true

describe('init', async () => {
  it('database', async () => {
    await Database.sequelize.sync({ force: true })
  })
})
