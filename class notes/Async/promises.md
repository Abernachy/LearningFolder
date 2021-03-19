# Promises
Promises are essentially like real life.  You make a promise to commit something and you either pass or fail.  

  At a corse, promises were created to eliminate the need for call backs.  As previously you were wrapping functions around functions based on their return values.


## Syntax
```
//Example 1

// promises are created with 2 parameters, a resolve and a reject
let p = new  Promise((resolve,reject)=>{
  //Define the actual promise- example delivering the best video ever
  // Or...attempting to grab data from a fetch
  let a = 1 + 1
  if(a==2) {
    resolve(`Success`)
  } else{
    reject(`Failed`)
  }
})



// Interact with the promise
// anything with a .then is going to run with the resolve
p.then((message) => {  //success
  console.log('This is in the then: ${message})
}).catch((message){  // Fail
  console.log(`This is in the cath ${message}`)
})


// Example 2

//  Create a promise
    // passing in a function that accepts a resolve and reject callback
    //if successfull, you call resolve, if failed, you call reject
    //In this case, if random number is 0, its resolve, else its reject
    
    const myPromise = new Promise((resolve,reject)=> {
       const rand = Math.floor(Math.random()*2);
        if(rand ===0){
            resolve()
        }else{
            reject()
        }
    }) 
    // Calling the promise
    myPromise
        .then(() => console.log('success))
        .catch(() => console.error('Something went wrong');
        )


```
## Examples

```

    
  // 1. fs readFile with promises
    //NOTE: This looks like try-except blocks from python
    fs.promises.readFile('./test.txt', {encoding: 'utf-8})
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

  //2. fetch with promises
        // requires node-fetch 
        // this example uses the pokemon-API
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            // this returns a response json, so we grab that and mutate it
            .then((rest)=> res.json())
            .then(data => console.log(data))
            .catch((err)=> console.error(err))

  //3. load file with async/await
        // in order to use async, we put async just before the function
        const loadFile = async () => {
            try{
            const data = await fs.promises.readFile('./test.txt', {
                encoding: 'utf-8',
            });
            console.log(data);
            } catch (error){
                console.error(error);
            }
        }; 
        //loadFile()

  //4. fetch pokemon with async/await without error handling
        const fetchPokemon = async(id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json()
            console.log(data)
        };
        fetchPokemon(2)
```

## Example comparing use with callbacks vs promises:

### Callback 
```

const userLeft = false
const userWatchinCatMeme = true

watchTutorialCallback((callback, errorCallback) => {
  if (userLeft) {
    errorCallback({ 
      name: 'User Left',
      message: "sad-face"
    })
  } else {
    callback('Thumbs up and Subscribe)
  }
})

watchTutorialCallback((message) => {
  console.log('Success: ' + message)
}, (error) => {
  console.log(error.name) + '  ' + error.message
})

```

### Promise variation of the above
```
watchTutorialPromise() => {
  return new Promise(resolve,reject){  
   if (userLeft) {
    reject({ 
      name: 'User Left',
      message: "sad-face"
    })
  } else {
    resolve('Thumbs up and Subscribe)
  }
}
}

watchTutorialPromise()
  .then((message) => {
  console.log('Success: ' + message)
})
  .catch((error) => {
  console.log(error.name) + '  ' + error.message
})

```

## Promise.All
```
const recordVideoOne = new Promise ((resolve,reject) => {
  resolve('Video 1 Recorded')
})
const recordVideotwo = new Promise ((resolve,reject) => {
  resolve('Video 2 Recorded')

})const recordVideothree = new Promise ((resolve,reject) => {
  resolve('Video 3 Recorded')
})


//Lets say that since all of these are success, we want to run their promises at the same time
// We would use Promise.All and wrap them in an array

Promise.all([
  recordVideoOne,
  recordVideotwo,
  recordVideothree
]) 
  .then((messages) => {
    console.log(messages)
  })
```