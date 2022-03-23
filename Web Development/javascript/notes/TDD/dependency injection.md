# Dependency Injection

In order to write code that is easy to change, we use dependency injection to decouple functionality across classes.  One object(or static method) supplies the dependencies of another object.  

When class A uses some functionality of class B, then its said that class A has a dependency of class B

## Why should I use it?
Lets say there is a car class that is responsible for creating all the dependency objects, now what if we decide to ditch MRFWheels in the future and use Yokohama wheels?

We would need to recreate the car object with a new Yokohama dependency.  When when using dependency injection (DI), we can change the wheels at runtime, rather than compile time.

## 3 types:

1.  Constructor injection: the dependencies are provided through a class constructor   
2.  setter injection: the client exposes a settter method that the injector uses to inject the dependency  
3.  interface injection: the dependency provides an injector method that will inject the depenecy into any client passed to it.  

So, the DIs responsiblity falls to:
1 Creating the objects  
2 Knowing which classes require those objects  
3 And provide them all those objects  

### Advantages:

1.  Helps with Unit Testing
2.  Boiler plate code is reduced, as initializing of dependencies is done by the injector component
3.  Extending the application becomes easier
4.  Hels to enable loose coupling, which is important in application programming


### Disadvantags:

1.  Its complex to learn, and if overused can lead to management issues
2.  Many compile time errors are pushed to run-time
3  Dependency injection frameworks are implemented with reflection or dynamic programming.  

## Javascript library
This can be done in javascript using the Di-Ninja or knifecycle libraries

## Code
```

// Imagine we have a fetch function
// We make a callback function as a required parameter
function getAnimals(fetch,id) {
  return fetch('http://api.animalfarmfame.com/animals/' + id)
  .then(response => response.json())
  .then(data => data.results[0])
}

```
In the case above, we fetch is called by the function as it depends on that (its from the browser)


When you call it, you have to pass in the function
```
getAnimals(window.fetch,123)
.then(animal => document.querySelector('.animal').innerHTML = animal.name)


//unit test for get animals
describe('getAnimals', () => {
  it('works in the basic case',() =>{
    // create the fake fetch
    const fakeFetch = url =>{
      assert(
        url === http://api.animalfarmfame.com/animals/
      )
      return new Promise(function(resolve))
    }
    getAnimals(faleFetch,123)
  })
})

// fake outputs
// we use done so we can call it later when the first test finishes
  it('parses the response of fetch correctly', (done)=>{
    const fakeFetch = url => {
      return new Promise.resolve({
        json: () => Promise.resolve({
          results: [
        {
          name: 'fluffykins'
          type: 'robotdragon'
        }
      ]

        })
      })
      getAnimals (fakeFetch, 12345)
        .then(result => {
          assert(result.name === 'fluffykins')
          done()
    })
  }


/* 
Imaginary api response


*/

//We are using mocha test
//We need DI because mocha does not have any way to test the fetch function
