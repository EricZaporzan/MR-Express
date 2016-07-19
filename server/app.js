express = require('express');
path = require('path');

routes = require('./routes');
db = require('./lib/db');
User = require('./models/user');

const app = express();

const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? process.env.PORT : 8080;
const publicPath = path.resolve('dist');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html')
});

app.use('/api', routes);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
