"use strict";

var mongoose = require('mongoose');

var _require = require('validator'),
    isEmail = _require.isEmail;

var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter a valid email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum pasword length is 6 characters']
  }
}); // fire function affter doc seves to db

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
          _context.next = 2;
          return regeneratorRuntime.awrap(bcrypt.genSalt());

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(bcrypt.hash(this.password, salt));

        case 5:
          this.password = _context.sent;
          next();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});
var User = mongoose.model('user', userSchema);
module.exports = User;