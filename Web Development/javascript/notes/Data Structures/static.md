# Static function
Function that lives with a class itself.  It allows us to do things with the classes.  Math() is an example of a static function.  We do not have to invoke a new math object, we just simply invoke the class and method itself.  These are put into the global scope and are accessible from anywhere

```
myNumbers = [2,56,78,9]

//className.FunctionInvokation

Math.min(myNumbers)


//writing them

static whichAnimalIsFaster(pet1,pet2){
  if(pet1.speed > pet2.speed){
    return pet1
  } else{
    return pet2
  }
}

//You can invoke the speed:
Pet.whichAnimalIsFaster(myDog,myCheetah)


// considerations for DnD dice roller?

class Tools{

  //Dice Roller
  satic rollDice(number,type){
    // Here would be where you set up the dice rolling 
    // return your number 
  }
}


Tools.rollDice(1,D20)
```
