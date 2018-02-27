require('app/database')

describe('mock数据', () => {
  it('mock', async () => {
    await Promise.all([
      Database.Article.mock({
        category: 'blog',
        title: 'test',
        banner: Database.Random.image('100x100'),
        author: 'By binginto',
        introduction: '简单介绍',
        content: 'March，4，2017'
      }, {
        category: 'blog',
        title: 'test',
        banner: Database.Random.image('100x100'),
        author: 'By binginto',
        introduction: '简单介绍2',
        content: 'March，4，2017'
      }, {
        category: 'blog',
        title: 'test',
        banner: Database.Random.image('100x100'),
        author: 'By binginto',
        introduction: '简单介绍3',
        content: 'March，4，2017'
      }, {
        category: 'blog',
        title: 'test',
        banner: Database.Random.image('100x100'),
        author: 'By binginto',
        introduction: '简单介绍4',
        content: 'March，4，2017'
      })
    ])
  })
})
