let person={
    name:'john',
    age:25,
    city:'new york',
    greet:function(){
        return 'hello,' + this.name;
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.greet());