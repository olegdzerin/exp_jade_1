
 class GlobalClient {
    age = 0;
    constructor(name, age1, age2){
        this.name = name;
        this.age1 = age1 + 400;
        this.age2 = this.name
    };
    sumAge_global(){
        return this.age1;
    }
    static staticMethod(){
        return this.age1 - this.age2;
    };
}

class Client extends GlobalClient {
    age = 0;
    constructor(name, age1, agg2){
        super()
        this.name = name;
        this.age1 = age1 + agg2;
        this.lastName = this.name
    };
    sumAge(){
        return this.age + this.age1;
    }
    static staticMethod(){
        return 'static method'
    }
};
Client.staticMethod_2 = function(){return 'another static method'}
module.exports = Client;
const client = new Client('ole', 21, 21);

console.log(client);