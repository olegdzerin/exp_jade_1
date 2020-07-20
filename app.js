var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var index1Router = require('./routes/index1');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');
var actorsRouter = require('./routes/actors');


var app = express();
 // var handlebars = require('express-handlebars');
var handlebars = require('express-handlebars').create({
  defaultLayout:'main',
  helpers: {
      section: function(name, options){
          if(!this._sections) this._sections = {};
          this._sections[name] = options.fn(this);
          return null;
      }
  }
});
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function ( req, res, next) { 
  console.log('res.locals');
  res.locals.anyone = 7878;
  
  next();
});

app.use('/', indexRouter);
app.use('/index1', index1Router);
app.use('/users', usersRouter);
// app.use('/actors', actorsRouter);
app.use('/films', filmsRouter);
app.use('/actors', actorsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
