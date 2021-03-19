var fetch = require('node-fetch')


function getAnimals(id) {
  return fetch('http://api.animalfarmfame.com/animals/' + id)
}