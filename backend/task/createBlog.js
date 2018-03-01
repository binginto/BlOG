const Database = require('app/database')
const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

const category = 'blog'
const title = '常见的http状态码'
const banner = Database.Random.image('100x100')
const author = 'By Binginto'
const introduction = '简单介绍2'

describe('init', async () => {
  it('markdown', async () => {
    const blog = await fs.readFileSync(path.resolve(__dirname, './blog/' + title + '.md'))
    const htmlStr = marked(blog.toString())
    console.log(htmlStr)
    Database.Article.mock({
      category: category,
      title: title,
      banner: banner,
      author: author,
      introduction: introduction,
      content: htmlStr
    })
  })
})
