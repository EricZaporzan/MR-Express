koa = require('koa');
path = require('path');

serverRouter = require('./routes');
db = require('./lib/db');
User = require('./models/user');

const app = koa();

const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? process.env.PORT : 8080;
const publicPath = path.resolve('../client/dist');

console.log(publicPath)

app.use(require('koa-static')(publicPath));

const baseRouter = require('koa-router')();

baseRouter
  .get('/', (req, res) => {
    res.sendFile(publicPath + '/index.html')
  });

baseRouter.use('/api', serverRouter);

app.use(baseRouter.routes());

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
