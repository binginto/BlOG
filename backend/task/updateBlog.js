const Database = require('app/database')
const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

describe('init', async () => {
  it('markdown', async () => {
    const blog = await fs.readFileSync(path.resolve(__dirname, './blog/vue组件间通讯.md'))
    const htmlStr = marked(blog.toString())
    console.log(htmlStr)
    const params = ''
    const id = ''
    Database.Article.update(params, {
      where: {
        id: id
      }
    })
  })
})
