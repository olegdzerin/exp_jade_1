"use strict";

var User = require('../models/User'); //hanfle erros


var handleErrors = function handleErrors(err) {
  console.log(err.message); // console.log(err._message);

  console.log(err.code); // dublicate error code

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
    }); // err.errors.email ? 
    // error.email = err.errors.email.properties.message:error.email = '';
    // err.errors.password ? 
    // error.password = err.errors.password.properties.message:error.password = '';
    // console.log(error.email);
    // console.log(error.password);
  }

  return error;
};

module.exports.signup_get = function (req, res) {
  res.render('signup');
};

module.exports.login_get = function (req, res) {
  res.render('login');
};

module.exports.signup_post = function _callee(req, res) {
  var _req$body, email, password, user, errros;

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
          res.status(201).json(user);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          errros = handleErrors(_context.t0); //  handleErrors(err);
          //   res.status(400).send('error,user not created')

          res.status(400).json(errros);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

module.exports.login_post = function _callee2(req, res) {
  var _req$body2, email, password;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          console.log(email, password);
          res.send("user login");

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};