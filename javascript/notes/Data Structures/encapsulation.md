# Encapsulation

## WTF Is this?
  Encapsulation is a way to bundle your data and methods in away that makes them restricted from outisde the bundle.  Essentially, if you want to change the state or mutate some object's props, instead of doing it from within and mutating directly, you call a method on the object that will mutate the object instead.  


  So..instead of:  
```
class MonsterGirl{
  constructor(name,hotness,race){
    this.name = name
    this.hotness = hotness
    this.race = race
    this.offensiveAttacks = []
  }

  addAttack(name,damage){
    let newAttack = {name: }
    this.offensiveAttacks.pu
  }
}

let Mia = new MonsterGirl('Mia','Hot','Lamia')

console.log(Mia.race)
Mia.offensiveAttacks.push({Name: 'Eradication', Damage: 15})
console.log(Mia.offensiveAttacks)

```
In the above, we do a naked call to add the offensive attack to Mia's character.  We don't want do that, as we are exposing our interface to the global.  With enough digging, you can break the code via an external attack.
To do this we make a few modifications 

```
class MonsterGirl{
  constructor(name,hotness,race){
    // adding an _ to the property.  It doesn't make it private, but developers agree to use as a standard to represent it privately
    this._name = name
    this._hotness = hotness
    this._race = race
    this._offensiveAttacks = []
    this._NumberOfAttacks = () => this._offensiveAttacks.length
  }

  get OffensiveAttacks(){ 
    //we can get the offensiveAttack using OffensiveAttacks() so it'll return the this.offensiveAttacks field
    return this.offensiveAttacks
  }

  set newAttacks({name,damage}){
    // Using set, we modify our offensive attacks
    OffensiveAttacks.push({Attack-Name: name, Attack-Damage: damage })
  }

}

let Mia = new MonsterGirl('Mia','Hot','Lamia')
```

### Fields and Methods
  These are broken up into one of 4 instances:  
  Public Fields  
  Private Fields  
  Public Methods  
  Private Methods  

## Conventional Privacy
this._shit = shit

If you want to fuck with shit, you have to do it via a set method
set shitWhack(stuff){
  return this._shit = 'whack'
}
