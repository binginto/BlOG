module.exports = app => {
  const { router, controller } = app;
  router.get('/', function () {
  	this.redirect('/index.html');
  });
  router.get('/index.html', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/getdata',controller.news.getdata);
};