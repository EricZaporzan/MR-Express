const router = require('koa-router')();

router
  .get('/example', function *(next) {
    this.body = {'title':'hello world!'};
  });

module.exports = router.routes();
