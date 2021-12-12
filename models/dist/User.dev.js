"use strict";

var mongoose = require('mongoose');

var _require = require('validator'),
    isEmail = _require.isEmail;

var bcrypt = require('bcrypt');

var initUser = require('./controllers');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter a valid email'],
    unique: true,
    lowercase: true // validate:[isEmail,"Please enter a valid email"]

  },
  password: {
    type: String,
    required: [true, 'Please enter a password'] //  minlength:[6,'Minimum pasword length is 6 characters'],

  }
});

userSchema.methods.simplePass = function () {
  console.log(this.password);

  if (this.password === '111111') {
    return true;
  }

  return false;
}; // fire function affter doc seves to db


userSchema.post('save', function (doc, next) {
  console.log('new user was create and saved', doc);
  next();
});
userSchema.pre('save', function _callee(next) {
  var salt;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          initUser(User);
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.genSalt());

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(this.password, salt));

        case 6:
          this.password = _context.sent;
          next();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}); //static method to login user

userSchema.statics.login = function _callee2(email, password) {
  var user, auth;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(this.findOne({
            email: email
          }));

        case 2:
          user = _context2.sent;

          if (!user) {
            _context2.next = 10;
            break;
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 6:
          auth = _context2.sent;

          if (!auth) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", user);

        case 9:
          throw new Error('incorrect password');

        case 10:
          throw new Error('incorrect email');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
};

var User = mongoose.model('user', userSchema);
module.exports.User = User;
module.exports.userSchema = userSchema;