const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const initUser =require('./controllers')
const userSchema = new mongoose.Schema({
    email: {
type: String,
required: [true,'Please enter a valid email'],
unique:true,
lowercase:true,
// validate:[isEmail,"Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
      //  minlength:[6,'Minimum pasword length is 6 characters'],
      
    },
});

userSchema.methods.simplePass = function(){
  console.log(this.password);
  if(this.password === '111111') {return true}
  return false
}

// fire function affter doc seves to db
userSchema.post('save',function(doc, next){
  console.log('new user was create and saved',doc);
  next();
});
userSchema.pre('save',async function(next){
  initUser(User);
const salt = await bcrypt.genSalt();
this.password =await bcrypt.hash(this.password, salt)
    next();
  });

 //static method to login user
 userSchema.statics.login = async function(email, password){

  const user = await this.findOne({email});
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
   
      return user;
    }
    throw new Error('incorrect password');

  }
  throw new Error('incorrect email')
}

const  User = mongoose.model('user', userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;