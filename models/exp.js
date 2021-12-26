const obj = {
    name: 'ivan',
    age: 33,
    get getUpper(){
        return this.name.toUpperCase()
    },
    set setNameUpper(arg){
      this.name =  arg
    }
};
//console.log(obj.getUpper);
// obj.setNameUpper = 'vitya'
// console.log(obj.getUpper = 23);

var a = 9
console.log(a, {a});

