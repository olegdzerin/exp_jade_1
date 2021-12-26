const assert = require('assert')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 0
    }
});
const Person = mongoose.model('Person', schema);



async function init() {
    let p = new Person({
        name: 'foo',
        age: 'bar'
    });
    // Cast to Number failed for value "bar" at path "age"
    // const result1 = await p.validate();
    //   console.log(result1);
    //   throw 
    let p2 = new Person({
        name: 'foo',
        age: 1
    });
    // Path `age` (-1) is less than minimum allowed value (0).
    const result2 = await p2.validate();
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
   // console.log(result2);
};
//init();

const schemaCat = new Schema({
    name: {
      type: String,
      required: true
    }
  });
  const Cat = mongoose.model('Cat', schemaCat);
  
  // This cat has no name :(
  const cat = new Cat();
//   cat.save(function(error) {
//       if(error) {
//              console.log(error.errors['name']);
//       console.log(error.errors['name'].message);
//       assert.equal(error.errors['name'].message,
//    'Path `name` is  required.')
//       }else{
//               console.log('all ok');  
//       }
 // });
 cat.save(function(error) {
    assert.equal(error.errors['name'].message,
      'Path `name` is required.');
  
    error = cat.validateSync();
    assert.equal(error.errors['name'].message,
      'Path `name` is required.');
  });
