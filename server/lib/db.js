const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/example');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //eslint-disable-line
db.once('open', () => {
  console.log('Connected to mongo database.'); //eslint-disable-line
});

module.exports = db;
