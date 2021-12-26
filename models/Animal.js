  const mongoose = require('mongoose');
  const {
    User,
    userSchema
  } = require('./User');

  const user = new User({
    email: 'aaa',
    password: 'pass'
  });

  const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample-mfix?retryWrites=true&w=majority"
  async function main() {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    //section1
    // const users = await User.find();
    // console.log(users)
    //section2
    // const users = await getUser();
    // console.log(users);
    //section3
    const vita = new User({
      email: 'vita11@gmail.com',
      password: '111111'
    });
    console.log(vita);
    const v = await vita.save();
    console.log(vita);
    console.log(v.logEmail());
  }

  function getUserCb() {

    User.find(function (err, users) {
      if (err) return err;
      console.log(users);
    })
  };

  function getUser() {

    return User.find();
  };
  main();
