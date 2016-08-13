const router = require('koa-router')();

router
  .get('/example', function *(next) { //eslint-disable-line
    this.body = { title: 'hello world!' };
  });

module.exports = router.routes();
