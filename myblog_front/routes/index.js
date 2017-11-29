var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  var options = {
  	root: path.resolve(__dirname, '../public/javascripts'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('test.html', options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', 'test.js');
    }
  });
});

module.exports = router;
