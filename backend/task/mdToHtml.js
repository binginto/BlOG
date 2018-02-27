const Database = require('app/database')
const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

describe('init', async () => {
  it('markdown', async () => {
    const test = await fs.readFileSync(path.resolve(__dirname, './blog/test.md'))
    const htmlStr = marked(test.toString())
    console.log(htmlStr)
    Database.Article.mock({
      category: 'blog',
      title: 'test1',
      banner: Database.Random.image('100x100'),
      author: 'By binginto',
      introduction: '简单介绍',
      content: htmlStr
    })
  })
})
