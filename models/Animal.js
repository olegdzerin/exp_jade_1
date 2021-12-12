  const mongoose = require('mongoose');
  const {User, userSchema} = require('./User');

  // define a schema
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
  const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample-mfix?retryWrites=true&w=majority"
  async function main() {
      await mongoose.connect(dbURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      })
       getUser()

  }

  function getUser() {
  
    User.find(function(err, users){
        if (err) return err;
        console.log(users);
    })
  };
  main();

