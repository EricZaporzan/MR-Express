const router = require('koa-router')();
const user = require('./controllers/user');

router
  .get('/example', function *() {
    this.body = { title: 'hello world!' };
  })
  .post('/users', function *() {
    console.log(this.request);
    user.create(this);
  });

module.exports = router;
