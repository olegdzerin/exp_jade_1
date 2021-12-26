const {User} = require('./User');

const main = require('./db-connect').main;
 
const obj = {email: 'vita4@gmail.com'};

async function create(user){
    const doc = new User(user);
      const res = await doc.save();
 
}

async function deleteOne(filter){
   await User.deleteOne(filter);
}

async function deleteOneStatic(){
  await User.deleteOneStatic();
};
 
function findOne (filter) {
  User.findOne(filter, (err, user) => {
    if (err) console.log(err);
    console.log(user);
  });

} 

async function run() {

  User.watch().
    on('change', data => console.log(new Date(), data));

  // Insert a doc, will trigger the change stream handler above
  console.log(new Date(), 'Inserting doc');
  await User.create({name: 'Axl Rose', email: 'axi@gmail.com', password: '111111' });
}
 
async function insert(user){
   const p = new User(user);
  const val = await p.validate();
  console.log(val);
}

async function update(arg){
 const val = await User.updateOne(arg[0], arg[1], { runValidators: true });
 console.log(val);
}
// main(deleteOne, obj);
// main(deleteOneStatic);
// main(findOne, {email: 'vita@gmail.com'});
//main(run);
//main(insert, {name: 'vav', email: 'vav@gmail.com', password: '11111111'});
//main(update, [{name: 'vav'}, {email: 'vitavita'}]);
main(create, {name: 'vav2',age: 66, email: 'vav7@gmail.com', password: '111111'});