"use strict";

var mongoose = require('mongoose');

var _require = require('./User'),
    User = _require.User,
    userSchema = _require.userSchema; // define a schema
//   const animalSchema = new mongoose.Schema({ name: String, type: String });
//   // assign a function to the "methods" object of our animalSchema
//   animalSchema.methods.findSimilarTypes = function(cb) {
//     return mongoose.model('Animal').find({ type: this.type }, cb);
//   };
//   const Animal = mongoose.model('Animal',  animalSchema);
//   const dog = new Animal({name: 'dog1', type: 'dog'});
//   dog.findSimilarTypes((err, dogs) => {
//     console.log(dogs); // woof
//   });


var dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample-mfix?retryWrites=true&w=majority";

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          }));

        case 2:
          getUser();

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getUser() {
  User.find(function (err, users) {
    if (err) return err;
    console.log(users);
  });
}

;
main();