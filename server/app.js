const koa = require('koa');
const path = require('path');

const db = require('./lib/db'); //eslint-disable-line

const app = koa();

const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? process.env.PORT : 8080;
const publicPath = path.resolve('../client/dist');

app.use(require('koa-static')(publicPath));
app.use(require('koa-bodyparser')());

const baseRouter = require('koa-router')();
baseRouter
  .get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
  });

const serverRouter = require('./routes');
baseRouter.use('/api', serverRouter.routes());
app.use(baseRouter.routes());

app.listen(port, () => {
  console.log('Listening on port ' + port); //eslint-disable-line
});
