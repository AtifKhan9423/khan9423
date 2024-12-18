var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index'); // adjust the path as needed

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

module.exports = app;
