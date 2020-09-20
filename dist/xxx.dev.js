"use strict";

var form = document.querySelector('.login');
var emailError = document.querySelector('.email.error');
var passwordError = document.querySelector('.password.error');
form.addEventListener('submit', function _callee(e) {
  var email, password, res, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault(); //reset errors

          emailError.textContent = '';
          passwordError.textContent = ''; //det the volue

          email = form.email.value;
          password = form.password.value; // body:JSON.stringify({email:email,password:password})

          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch('/login', {
            method: "POST",
            // body:JSON.stringify({email:email,password:password})
            body: JSON.stringify({
              email: email,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 8:
          res = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(res.json());

        case 11:
          data = _context.sent;
          console.log(data);

          if (data.errors) {
            emailError.textContent = data.errors.email;
            passwordError.textContent = data.errors.password;
          }

          if (data.user) {
            location.assign('/');
          }

          _context.next = 19;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 17]]);
});