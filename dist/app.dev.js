"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var formidable = require('formidable');

var indexRouter = require('./routes/index');

var index1Router = require('./routes/index1');

var usersRouter = require('./routes/users');

var filmsRouter = require('./routes/films');

var actorsRouter = require('./routes/actors');

var usersPostRouter = require('./routes/usersPost');

var loadFileRouter = require('./routes/loadFile');

var thankYouRouter = require('./routes/thank-you');

var loadFilePostRouter = require('./routes/loadFilePost');

var newsletterRouter = require('./routes/newsletter');

var processRouter = require('./routes/process'); // var authRouters = require('./routes/authRouters');


var authRouters = require('./routes/authRouters');

var app = express(); // var handlebars = require('express-handlebars');

var handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
  helpers: {
    section: function section(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
}); // app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');


app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs'); // view engine setup
// app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  console.log('res.locals');
  res.locals.anyone = 7878;
  next();
});
app.use('/', indexRouter);
app.use('/index1', index1Router);
app.use('/users', usersRouter); // app.use('/actors', actorsRouter);

app.use('/films', filmsRouter);
app.use('/actors', actorsRouter);
app.use('/usersPost', usersPostRouter);
app.use('/loadFile', loadFileRouter); // app.post('/loadFilePost/:year/:month', function(req,res,next){
//   console.log(`req.params${req.params.year}`);
//   var form = new formidable.IncomingForm();
//   form.parse(req, function(err, fields, files){
//       if(err) return res.redirect(303, '/error');
//       console.log('received fields:');
//       console.log(fields);
//       console.log('received files:');
//       console.log(files);
// })
//res.redirect(303,'/thank-you');
// });

app.use('/loadFilePost', loadFilePostRouter);
app.use('/newsletter', newsletterRouter);
app.use('/process', processRouter);
app.use('/thank-you', thankYouRouter); // catch 404 and forward to error handler

app.use(authRouters); // cookies

app.get('/set-cookies', function (req, res) {
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.cookie('newUser', true, {//  maxAge:1000 * 60 * 60 * 24,
    //  secure: true
  });
  console.log('You have cookies');
  res.send('you have cookie');
});
app.get('/read-cookies', function (req, res) {});
app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;