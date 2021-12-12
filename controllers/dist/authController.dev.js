"use strict";

var User = require('../models/User');

var jwt = require('jsonwebtoken'); //hanfle erros


var handleErrors = function handleErrors(err) {
  console.log(err.message); // console.log(err._message);

  console.log(err.code);
  var errors = {}; // dublicate error code

  if (err.code === 11000) {
    errors.email = 'this email is already registered';
    return errors;
  }

  var error = {
    email: '',
    password: ''
  }; // validation errors

  if (err.message.includes('user validation failed')) {
    //    console.log(Object.values(err.errors.email.properties.message));
    Object.values(err.errors).forEach(function (_ref) {
      var properties = _ref.properties;
      error[properties.path] = properties.message;
    });
  }

  if (err.message === 'incorrect email') {
    error.email = 'Введіть правельній email';
  }

  if (err.message === 'incorrect password') {
    error.email = 'Введіть правельній пароль';
  }

  console.log(error);
  return error;
};

var maxAge = 3 * 24 * 60 * 60;

var createToken = function createToken(id) {
  return jwt.sign({
    id: id
  }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

module.exports.signup_get = function (req, res) {
  res.render('signup');
}, module.exports.login_get = function (req, res) {
  res.render('login');
};

module.exports.signup_post = function _callee(req, res) {
  var _req$body, email, password, user, token, errors;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.create({
            email: email,
            password: password
          }));

        case 4:
          user = _context.sent;
          token = createToken(user._id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
          });
          res.status(201).json({
            user: user._id
          });
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          errors = handleErrors(_context.t0); //    handleErrors(err);
          //   res.status(400).send('error,user not created')

          res.status(400).json({
            errors: errors
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

module.exports.login_post = function _callee2(req, res) {
  var _req$body2, email, password, user, token, errors;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.login(email, password));

        case 4:
          user = _context2.sent;
          token = createToken(user._id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
          });
          res.status(201).json({
            user: user._id
          });
          _context2.next = 16;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          errors = handleErrors(_context2.t0);
          console.log(_context2.t0.message);
          console.log(_context2.t0);
          res.status(400).json({
            errors: errors
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

module.exports.logout_get = function (req, res) {
  res.cookie('jwt', '', {
    maxAge: 1
  });
  res.redirect('/');
};