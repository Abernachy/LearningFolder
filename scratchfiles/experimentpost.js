// This is pulled from the animal api project.  
// Intent for this is to pull apart and learn better how POST can work
// and also get better at manipulating objects within 


const fetch = require('node-fetch');
var fs = require('fs');
var Promise = require('bluebird');
var writeFileAsync = Promise.promisify(fs.writeFile)


var fetchDesiredAnimals = (status) => {
  var availablePets = {}
  var url = (`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
  fetch(url)
    .then(response => response.json())
    .then(petArray => {
      petArray.forEach(pet => {
        if (availablePets.hasOwnProperty(pet["name"])) availablePets[pet["name"]]++
        else availablePets[pet["name"]] = 1
      })
    })
    .then(() => {
      var results = (Object.keys(availablePets).map(key => [key, availablePets[key]])).join('\n')
      writeFileAsync(`${status}_Pets.txt`, JSON.stringify(results))
    })
}

//fetchDesiredAnimals("available")
//fetchDesiredAnimals("pending")

var postFunction = (inputFile) => {
  var contentString = fs.readFileSync(inputFile, "utf8");
  var contentArray = contentString.split('\r\n')
  var myNewPet = {
    "name": contentArray[0],
    "id": 917,
    "status": contentArray[1]
  }

  var postURL = "https://petstore.swagger.io/v2/pet"
  fetch(postURL, {
    method: 'post',
    body: JSON.stringify(myNewPet),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
//           process.argv.slice(2)
var myArgs = (process.argv.slice(2))[0];
//console.log('myArgs: ', myArgs);
//postFunction(process.argv.slice(2))
postFunction(myArgs)

