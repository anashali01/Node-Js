let user = {
    name : "John",
    age : 13,
    address : {
        city : "Delhi",
        state : "Delhi"
    },
    greeting : function(){
        console.log(`Hello My name is ${this.name} and I am from ${this.address.city}`);
    }
}

module.exports = user;