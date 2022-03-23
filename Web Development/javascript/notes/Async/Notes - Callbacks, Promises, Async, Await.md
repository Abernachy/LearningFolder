

# Callback Functions
    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action

    1. //Set timeout example
    This is async because we tell it to do something in the future
    setTimeout(() => console.log('Waited 1 second), 1000);

    2. // nested setTimeout (calback hell)
    setTimeout(() =>{
        console.log('3);
        setTimeout(()=>{
            console.log('2');
            setTimeout(()=>{
                console.log('1')
            }, 1000);
        },1000;)
    },1000)


    3. // button event handler in browser
    const btn;
    btn.addEventListener('click',() =>{
    }) // this only works in the DOM , not via node

    4. //error first callback
    fs.readFile('./test.txt', {encoding:'utf-8}, {err,data}=>{
        console.log(data)
    })

# Promises
    Represent the eventual completion of an async operation and its resulting value
    
    1.// Create a promise
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
    
    2. //fs readFile with promises
    //NOTE: This looks like try-except blocks from python
    fs.promises.readFile('./test.txt', {encoding: 'utf-8})
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    3. //fetch with promises
        // requires node-fetch 
        // this example uses the pokemon-API
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            // this returns a response json, so we grab that and mutate it
            .then((rest)=> res.json())
            .then(data => console.log(data))
            .catch((err)=> console.error(err))

    4. //load file with async/await
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

    5. //fetch pokemon with async/await without error handling
        const fetchPokemon = async(id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json()
            console.log(data)
        };
        fetchPokemon(2)
   