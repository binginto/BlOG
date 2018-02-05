require('app/database')

describe('mock数据', () => {
  it('mock', async () => {
    const [meeting1, meeting2] = await Promise.all([
      Database.Meeting.mockOne({ type: 0, name: '主会场' }),
      Database.Meeting.mockOne({ type: 1, name: '分会场' }),
      Database.User.mockOne({ openId: 'onqgj0eYO9hhlJGz-H9I7W66etQk', avatar: Database.Random.image() }),
      Database.Banner.mock({
        url: 'http://p300nu9jr.bkt.clouddn.com/banner.jpg'
      }),
      Database.Guest.mock({
        avatar: Database.Random.image('100x100'),
        name: '林教头'
      }, {
        avatar: Database.Random.image('100x100'),
        name: '林教头'
      }, {
        avatar: Database.Random.image('100x100'),
        name: '林教头'
      }),
      Database.Schedule.mock({
        img: 'http://p300nu9jr.bkt.clouddn.com/schedule.png',
        date: new Date('2018-04-11')
      }, {
        img: 'http://p300nu9jr.bkt.clouddn.com/schedule.png',
        date: new Date('2018-04-12')
      }),
      Database.Guide.mock({
        status: 1,
        img: 'http://p300nu9jr.bkt.clouddn.com/banner.jpg'
      }, {
        status: 0,
        img: 'http://p300nu9jr.bkt.clouddn.com/guide.png'
      }),
      Database.HistoryVideo.mock({
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/08/30/155050ghnex.png',
        desc: '开放、融创、生态',
        placeType: 1
      }, {
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/09/23/141702cuv2k.png',
        desc: '微商服务者交流分享',
        placeType: 1
      }, {
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/08/30/152459jdvut.png',
        desc: '中小代理的成长之路',
        placeType: 1
      }, {
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/08/30/152850d1gwk.png',
        desc: '社群迷局与场景的变现',
        placeType: 1
      }, {
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/08/30/153944ivz2v.png',
        desc: '意愿经济的微商模型',
        placeType: 1
      }, {
        url: 'https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4',
        poster: 'http://app.wegoo.cn/f/2017/09/23/1113242ub2u.png',
        desc: '互联网+农业重构县域新经济',
        placeType: 1
      }),
      Database.HistoryGraphic.mock({
        avatar: 'http://app.wegoo.cn/f/2017/08/30/155050ghnex.png',
        desc: '开放、融创、生态',
        url: 'http://www.baidu.com'
      }, {
        avatar: 'http://app.wegoo.cn/f/2017/09/23/141702cuv2k.png',
        desc: '微商服务者交流分享',
        url: 'http://www.baidu.com'
      }),
      Database.Partner.mock({
        avatar: Database.Random.image('100x100')
      }, {
        avatar: Database.Random.image('100x100')
      }, {
        avatar: Database.Random.image('100x100')
      })
    ])
    await Database.Ticket.mock({
      meetingId: meeting1.id,
      type: 0,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/vip_ticket_small.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/vip_ticket_large.jpg',
      name: '贵宾票',
      desc: '世界微商大会贵宾票',
      price: 1,
      beginedAt: new Date('2018-1-31'),
      endedAt: new Date('2018-2-5'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 200,
      restNum: 200,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: meeting1.id,
      type: 0,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/vip_seat_small.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/vip_seat_large.jpg',
      name: '贵宾坐席',
      desc: '世界微商大会贵宾坐席',
      price: 198000,
      beginedAt: new Date('2018-4-12'),
      endedAt: new Date('2018-4-15'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 200,
      restNum: 200,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: meeting1.id,
      type: 0,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/normal_seat_small.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/normal_seat_large.jpg',
      name: '普通坐席',
      desc: '世界微商大会普通坐席',
      price: 99000,
      beginedAt: new Date('2018-4-12'),
      endedAt: new Date('2018-4-15'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: meeting2.id,
      type: 0,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/normal_seat_small.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/normal_seat_large.jpg',
      name: '普通坐席',
      desc: '世界微商大会普通坐席',
      price: 1,
      beginedAt: new Date('2018-4-12'),
      endedAt: new Date('2018-4-15'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: null,
      type: 1,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/course_xiaojiang.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/course_xiaojiang.jpg',
      name: '销讲班',
      desc: '包含世界微商大会1980门票',
      price: 498000,
      beginedAt: new Date('2018-2-11'),
      endedAt: new Date('2018-2-16'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: null,
      type: 1,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/course_caopanshou.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/course_caopanshou.jpg',
      name: '操盘手',
      desc: '包含世界微商大会1980门票',
      price: 980000,
      beginedAt: new Date('2018-2-11'),
      endedAt: new Date('2018-2-16'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: null,
      type: 1,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/course_leader.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/course_leader.jpg',
      name: '领导力',
      desc: '包含世界微商大会1980门票',
      price: 498000,
      beginedAt: new Date('2018-2-11'),
      endedAt: new Date('2018-2-16'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    }, {
      meetingId: null,
      type: 1,
      avatar: 'http://p300nu9jr.bkt.clouddn.com/course_miracle.jpg',
      banner: 'http://p300nu9jr.bkt.clouddn.com/course_miracle.jpg',
      name: '微商奇迹',
      desc: '包含世界微商大会980门票',
      price: 98000,
      beginedAt: new Date('2018-2-11'),
      endedAt: new Date('2018-2-16'),
      address: '浙江义务国际博览城',
      latitude: '29.31',
      longitude: '120.11',
      limitNum: 1000,
      restNum: 1000,
      origanizerName: 'xxx主办方',
      origanizerDesc: '微商生态链服务企业',
      origanizerImg: Database.Random.image('100x100'),
      origanizerPhone: Database.Random.integer(11)
    })
  })
})
