const User = require("./User")

module.exports = function initUser(User1){
 
   const user1 = new User1({email: 'vika@',password: '111111'});
   console.log(`user: ${user1.simplePass()}`);
   console.log(`User: ${User1.prototype}`);
}