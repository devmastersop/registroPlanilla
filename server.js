
var express = require('express');
var app = express();
var data_user = require('./data/user_data.json');
const URL_BASE = '/regpayroll/v1/';
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get(URL_BASE + 'users', function (req, res) {
  console.log(data_user[5]);
  res.send(data_user);
});

app.get(URL_BASE + 'users/:id', function (req, res) {
  var pos = req.params.id - 1;
  console.log (pos);
  res.send(data_user[pos]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

