const {User} = require('./User');
const mongoose = require('mongoose');
const main = require('./db-connect').main;
 

function findOne (filter) {
  User.findOne(filter, (err, user) => {
    if (err) console.log(err);
    console.log(user);
  });

} 
function find (filter) {
    User.find(filter, (err, user) => {
      if (err) console.log(err);
      console.log(user);
    });
  
  } ;

  function getFilter1(){
    const query = User.findOne({name: 'vav2'});
    console.log(query.getFilter());
     query.find({age: {$gt: 31}});
     console.log(query.getFilter());
  }

 async function getFilter2(){
    // const query = User.findOne({
    //     _id: '61c6fc00b919764c7caa5583',
    //       age: { $gt: '30' }
    //   }, function(err, data){
    //       if (err) console.log(err);
    //       console.log(data);
    //   });
    const query = User.findOne({
        _id: '61c6fc00b919764c7caa5583',
          age: { $gt: '30' }
      });
  
    console.log(query.getFilter());
  console.log(query.getFilter()._id instanceof mongoose.Types.ObjectId);
      await query.exec()
    console.log(query.getFilter());
    console.log(query.getFilter()._id instanceof mongoose.Types.ObjectId);
  }

// main(getFilter1, {age: {$gt: 31}});
main(getFilter2);
 
