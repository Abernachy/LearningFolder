# Classes

  Prototypes are blueprints of objects.  When we use OOP to create an object, we essentially create the constructor function.  The function that acts as a blueprint for future objects created by the constructor.

  These objects are created when we use the new keyword:
  const saab = new Car('red')

  When it comes to inheritance, JS only has one construct: objects.  Each object has a private property which holds a link to another object called its prototype.  

## Creating our constructor class using prototype chain and delegation
We first create our constructor class as an Object
```
const Car = function(color){
  // establishes 'this' context
  // const instance = Object.create(Car.prototype)
  
  this.color = color
  // method & property? method = function, property = 
  const drive = function(){
    return 'driving'
  }
  this.drive = drive
  // returning instance
  // You are not required to use return since the new keyword does that for us
}
```

Then when we want to create our object we use the new keywoard

```
// When we say new Car, JS looks for the constructor function

const saab = new Car('red')

console.log(saab.color)
// 'red'

//Create a drive function that goes to all Car prototypes
Car.prototype.drive = function(){
  return `We're Driving ${this.color} car`;

}
// When we create the instance object of Car, it has nothing but color on it

// Then when we call .drive(), it looks in the blueprint for .drive, but it cannot find it.  It then looks up the prototype chain from the Saab, and it finds the Car.prototype.drive.

// Once found, it will then be able to successfully invoke the method
saab.drive()


```

## Inheritance
```
// Using Segway example

const Segway = function(color){
  // How to invoke a function with a custom 'this'
  // we use .call(this,[arguments we want to call])

  Car.call(this, color)
  this.stable = true

}
const wayze = new Segway('rainbow');

// We want to car methods from our Segway
wayze.drive()  // outputs : TypeError: wayze.drive is not a function

// After using .call
console.log(wayze.color) //'rainbow'


// If we want to delegate the methods that cant be found on the segway, to the car, we use Object.create

Segway.prototype = Object.create(Car.prototype)

// Now when we invoke wayze.drive()
wayze.drive()
//'We're driving a rainbow car"

```

## Idea for use
So for DnD stuff, we can create a base constructor representing a shell that takes in values and sets them to 0
```
const Shell = function(name,race,ac,level,hp,str,dex,con,wis,int,cha,ac){
  this.name = name,
  this.level = level
  etc
}

const CharacterClasses(classname,abilities){
  Shell.call(this)
  this.classname
}


## ES6 style
```
/*
const Burger = function(doneness){
  this.doneness = doneness
}

const bigMac = new Burger('medium-rare')

*/ 
// old style

//new style

class Burger {
  constructor(doneness,life-Count){ // you have to call it constructor
  this.doneness = doneness,
  this.life-Count = 3
  }

  poison(life-Count=3){
    life-Count--;
    return (`You're life is at: ${life-Count})
  }

  bigMac.poison()

}

// When we want to inherit parameters from another we use a combination of super and extends

class ChickenSandwitch extends Burger{
  constructor(spicyness){
    super('Cooked')
    this.spicyness = 'Spell Caster'
  }
poison(){
  return super.poison(2)
}



}
