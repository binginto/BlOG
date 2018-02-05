'use strict';
const path = require('path');
module.exports = appInfo => ({
  keys: '87986201_13610081538',
  view: {
    root: path.join(appInfo.baseDir, '../myblog_front/dist'),
    cache: true,
    defaultExtension: '.html',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  },
  news: {
    pageSize: 1,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  },
  middleware: ['robot'],
  robot: {
    ua: [
    /curl/i,
    /Baiduspider/i,
    ],
  },
  static: {
    prifix: '../myblog_front/dist',
    dir: path.join(appInfo.baseDir, '../myblog_front/dist') ,
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,       
  },
  security: {
    domainWhiteList: [ 'http://localhost:8080' ],
  },
});

