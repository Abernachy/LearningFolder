# Classes 

# Decorators 
From the slides on the Galvanize course

The whole purpose of a decorator function is to add functionality to an object that had some other functionality in it already.  


## 

```
// Imagine we have an amy object
var amy = {loc: 1}  //with a location set to a value
amy.loc++         // consider we want to move car further down a street


// Now...we want another car object
var ben = {loc: 9}
ben.loc++       // Same deal as before


//What looks reusable?
// Notice how the .loc++ is incremented in both?
// Lets write a function for that
var move = (car) => {car.loc++}
// Now we can just simply..
move(amy)
move(ben)

// We can also factor out the location property
var carlike = function(obj, loc ){
  obj.loc = loc
  return obj
}

// We can also simplify the move function even more, by adding a move property to the carlike objects
// We call this function below, a decorator function
var carlike = function(obj,loc){
  obj.loc = loc
  obj.move = function(){this.loc++}
  return obj
}


// So now  we've simplified it all together, but everytime we run the carlike function, it creates a new function to add as the .mvoe property of the input object
// The old way created 1 function object for all car like objects to point their .move property to.  By refactoring it all together, we avoided duplicate code and avoided duplicate in memory function objects

var carlike = function(obj,loc){
  obj.loc = loc
  obj.move = function(){obj.loc++}
  // the this argument gets bound to a new value whenever .move is invoked, by using obj we can refer it to one particular car object
  return obj
}

```

# Functional Classes
  Since an object beign decorated is a brand new empty object, we could have the carlike function build the object for us.  This is where the basic idea of classing in Javascript comes from

  The only difference between an object doecrator and a class is that a class builds the object is augmenting, whereas the decorators accept their target object as an input

```
var carlike = function(obj, loc) {
    obj.loc = loc
    obj.move = function() { obj.loc++ }
    return obj
}

// Lets simply move the creation of the carlike object around
var Car = function(loc) {
    var obj = { loc: loc }
    obj.loc = loc
    obj.move = function() { obj.loc++ }
    return obj
}

// Now we have a class.
// A class is any construct capable of producing a fleet of similiar objects that all conform to some interfeace.  You typically use an uppercase letter as part of the naming style

/*
 There is still work we need to do.  the obj.move line will create a duplicate method, basically creating a new function everytime we call it.
 This will eventually create memory problems.  To alleviate this, we want to have the function creation moved to outside the Car obj.

However; by moving it outside the constructor, it will no longer have closure scope access to the obj variable, where a new instance is stored.
We alleviate this by using the 'this' argument.  "'This" treats the object found on the left of the calltime dot as a function input and provides a name we use to refer to it.


```

##
PseudoClassical Style
```
/ pseudoclassical style of classes and shit
// Parent class MonsterGirl
var MonsterGirl = function(name,race,hotness){
  this.name = name
  this.race = race
  this.hotness = hotness
}

// We have created our intial constructor,but we want to add methods to it

MonsterGirl.prototype.attack = function (){
  return `${this.name} attacks, dealing damage`
}

MonsterGirl.prototype.sayHello = function(){
  return `${this.name} says, "Hello!"`
}

//Now we want to create a subclass of our Monstergirl, Mia
var Lamia = function(name,race,hotness,attackPower){
  MonsterGirl.call(this,name,race,hotness) // get some properties from MonsterGirl
  this.race = Lamia
  this.attackPower = 15
}

Lamia.prototype = Object.create(MonsterGirl.prototype)  // set some inheritance
Lamia.prototype.constructor(MonsterGirl.prototype)

Lamia.prototype.claw = function(){
  return `You are clawed by ${this.name} for ${this.attackPower} damage.`
}

var Mia = new Lamia('Mia','Lamia','HAWT')

console.log(Mia)
console.log(Mia.claw())
```

