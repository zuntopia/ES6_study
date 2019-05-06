let x=1, y=2;
var obj={x, y};

//const obj{x, y};

console.log(obj);


var obj1 = {
    name: 'lee',
    sayHi: function(){
        console.log("wow " + this.name);
    }
}

obj1.sayHi();

const obj2 = {
    name: 'Kim ',
    sayHi(){
        console.log("www "+ this.name);
    }
}

obj2.sayHi();


const parent = {
    who: "parent",
    say(){console.log('hello ' + this.  who)},
}

const child = {
    who: "ES6 child",
    __proto__: parent,
}

//ES5
var es5 = Object.create(parent);
es5.who = "ES5 child"
es5.say()

//ES6
es6 = child.say()