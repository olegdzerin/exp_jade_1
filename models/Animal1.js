const mongoose = require('mongoose');
const {User, userSchema} = require('./User');

const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample-mfix?retryWrites=true&w=majority"
async function main() {
    await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    //section1
    const vita = new User({name: 'vita', email: 'vita77@gmail.com',
                  password: '111111'}); 
      vita.findSimilarTypes(function(err, data){
          if(err) console.log(err);
          console.log(data);
      })
   
}
main();