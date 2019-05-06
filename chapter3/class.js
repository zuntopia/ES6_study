var Person = (function(){ 

    function Person(name){
        this._name = name;
    }

    Person.prototype.say = function(){
        console.log("hello "+ this._name);
    };

    return Person;
}());

var me = new Person('Avengers');
me.say();


class Avengers{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log("Avengers " + this.name);
    }
    //this.captain='america';
}

let avengers = new Avengers('Ironman');
avengers.say();

class Thor extends Avengers{
    
    weapon(){
        console.log(this.name + " use hammer");
    }
}

let thor = new Thor("Thor");
thor.weapon();

