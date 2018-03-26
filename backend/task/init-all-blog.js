const Database = require('app/database')
const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

const category = 'blog'
const banner = Database.Random.image('100x100')
const author = 'By Binginto'
const introduction = '简单介绍2'

describe('init', async () => {
  it('markdown', async () => {
    const blogs = await fs.readdirSync(path.resolve(__dirname, './blog'))
    for (let i = 0; i < blogs.length; i++) {
      const blog = await fs.readFileSync(path.resolve(__dirname, './blog/' + blogs[i] ))
      const htmlStr = marked(blog.toString())
      await Database.Article.mock({
        category: category,
        title: blogs[i],
        banner: banner,
        author: author,
        introduction: introduction,
        content: htmlStr
      })
    }
  })
})
