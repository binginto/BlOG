'use strict';

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7006, // default to 7001
});