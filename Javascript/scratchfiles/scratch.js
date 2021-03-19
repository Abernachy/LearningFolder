/*
class MonsterGirl{
  constructor(name,hotness,race){
    // adding an _ to the property.  It doesn't make it private, but developers agree to use as a standard to represent it privately
    this._name = name
    this._hotness = hotness
    this._race = race
    this.abilities = {}
    this._NumberOfAttacks = () => this._offensiveAttacks.length
  }

  get abilities(){ 
    //we can get the offensiveAttack using OffensiveAttacks() so it'll return the this.offensiveAttacks field
    return this.abilities
  }

  set addNewAbility([type,name,damage]){
    // Using set, we want modify our offensive attacks list
    // Create a new 'genre' if it doesn't exit 
    if (typeof this.abilities.type === 'undefined'){
      this.abilities.type = [[name,damage]]
    }else{
      this.abilities.type[0].push([name,damage])
    }
  }

}

let Mia = new MonsterGirl('Mia','Hot','Lamia')
console.log(Mia.race)
Mia.setaddnewAbility(['Offensive','Eradication',56])
console.log(Mia.offensiveAttacks)

//You can pass an array or objects to a set method @Mason

//Mia.abilities.offensive => ability name
// ability name => ability Database
// abilities.


// Save the above, I need more experimentation 
*/



const fetch = require('node-fetch');

  
  const petObject = {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "SnakeBitties",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }


  
  var postFunction = (inputFile) => {
    var myNewPet = {
      "name": "testPet",
      "id": 912,
      "status": "available"
    }
    var postURL = "https://petstore.swagger.io/v2/pet"
    fetch(postURL, {
        method: 'post',
        body: JSON.stringify(myNewPet),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json)
      .then(jsonResponse => console.log(jsonResponse))
  }
  
  postFunction()




  /*.then(petArray =>{
    petArray.forEach(pet =>{
      addPet(pet["name"])
      console.log(pet["name"])
      
    })
    //console.log(availablePets)
  })
}



var addPet = function(petToAdd){
  if (availablePets.hasOwnProperty(petToAdd)) availablePets[petToAdd]++
  else availablePets.petToAdd = 1
}
/*
[
{
    id: 9222968140497190000,
    category: { id: 0, name: 'string' },
    name: 'doggie',
    photoUrls: [ 'string' ],
    tags: [ [Object] ],
    status: 'available'
}
    */
//]