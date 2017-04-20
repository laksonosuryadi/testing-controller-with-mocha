var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var foods = require('./routes/foods');

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let mongoURL = {
  development: 'mongodb://localhost/mocha_portfolio/',
  test:'mongodb://localhost/mocha_portfolio_test'
}

mongoose.connect(mongoURL[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error while connecting to the database. ' + err);
  } else {
    console.log('Using database: ' + mongoURL[app.settings.env]);
  }
})

mongoose.connection.on('connected', function(){
  console.log('Mongoose is connected');
})

app.use('/', foods);

app.listen(port, function(){
  console.log(`Listening on port: ${port}`);
});

module.exports = app;
