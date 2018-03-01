const Database = require('app/database')
const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

describe('init', async () => {
  it('markdown', async () => {
    const blogs = await fs.readdirSync(path.resolve(__dirname, './blog'))
    console.log(blogs)
  })
})
