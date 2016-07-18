express = require('express');
path = require('path');

var app = express();

var isProd = process.env.NODE_ENV === 'production';
var port = isProd ? process.env.PORT : 8080;
var publicPath = path.resolve('dist');

app.use(express.static(publicPath));

app.get('/s', function(req, res) {
  console.log(publicPath)
  res.sendFile(publicPath + '/index.html')
})

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
