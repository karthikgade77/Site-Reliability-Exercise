var usertext = 'Hello, Cardlytics! What a beautiful day!'

var card = 'Cardlytics';

var express = require('express')

var app = express();

if(usertext.indexOf(card) > -1) {
  app.get('/', function (req, res) {
    res.send(usertext);
  });
};

if(usertext.indexOf(card) !== -1) {
  app.get('/', function (req, res) {
    res.send(usertext);
  });
};
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
