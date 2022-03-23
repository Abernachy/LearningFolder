# Node Fetch notes

All right, so the intent behind this is to sort of be my source for notes for using this resource and to help give me some ideas when grabbing stuff via fetch

Fetch is an API for fetching resources.  It provides a generic definitition of Request and Response objects.  this will allow them to be used wherever they are neeeded.
'

## Basic Syntax use:




var fetch = requires('node-fetch')


### Grabbing shit:
This modules works via fetching and returning promises.  When you do an initial fetch, you typically get back stream.  In order to get something meaty,you have to use '.then' to convert the stream into a JSON or an html object



API - 
fetch(url[, options])  
* url - string representing the url  
* options -Options for the request  
* Returns - Promise<Response>  

The function returns a Resposne object with a number of methods we can use:  
text() - returns the response body as a string  
json() - parses the response body into a JSON object, and throws an error if the body cant be parsed  

status and statusText - contain information about the status code  
ok - equals true if statux is a 2xx code  
headers - an object containing response haeaders, a specific header using the get() function  

In addition to .then, you can use .catch, since a promise object is returned, meaning it has an (error,resolve) component

**Options**  
  // These are the default parameters and are standard to Fetch:  
  method: 'Get'  
  headers: {}  
  body: null  
  redirect: 'follow'  
  signal: null  

  // These are the properties for the node-fetch extensions  
  follow: 20  //maximum redirects  
  timeout: 0  // response timout in ms  
  compress: true  //support gzip/deflate content encoding  
  size: 0  //maximum response body size in bytes  
  agent: null  


**Headers**  
If no values are set, the headers are sent automatically:

Accept Encoding : gzip,deflate
Accept */*
Connection close
Content-Length
Transfer-Encoding: chunked
**User-Agent** : node-fetch/1.0

```
// Plain text or HTML
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));

// JSON - Fetching a target
/* To get our data we have 2 approaches to do:
 1 - store it in a global variable  
 2 - assign a  variable to fetch the data

//------ First method ------ (set it as a return?)
fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
  .then(result => result.json())
  .then(data => {
    console.log('data',data)
  });


//------Second Method--------
// considerations: const dataChunk = (itemID,server,array)

const ditto = () => {
  const myResponse = fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
  .then(result => result.json())
  .then(data => {
    return data;
  })
  return myResponse
}

// Creating a function that will handle error checking
function checkResponseStatus(res){
  if(res.ok){
    return res
  } else{
    throw new Error(`The hTTP status of the resonse: ${res.status} (${res.statusText})`)
  }
}

var ditto = fetchTarget('https://pokeapi.co/api/v2/pokemon/ditto/')
//outputs ditto data

```

# Considerations  
  fetch requests run asnyncly, as in they don't fucking wait.  If you run a function to grab something and then attempt to console log it immediately afterwards, due to the nature of how javascript works, it will run the console.log while still running the fetch request.  As a result, the consolelog will return undefined.  Best way I've found to get around that is to basically set a timeout, if you want to view the data.  **If we want to mutate or modify or do something with the data, the best bet is to do that within the promise, rather than have the promise just bring back the original shape**




# Changing parameters around
So going off of the top...  

options => headers: User-Agent  
so.....  
fetch(url,{headers:{User-Agent: <the value I want to set here? >}})

...

that shit fucking worked, lols
Universalis.app normally blocks anonomyous request based on User-Agent.  In order to make it believe you are a person and not some shit for dick, you have to use a custom user-agent (inspection tools > Network > target > headers >User-Agent)

# Grabbing data from universalis:
```
const fetch = require('node-fetch')
const usrAg = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OPR/73.0.3856.408'

const target =  'https://universalis.app/data/categories_en.js'


// Creating a function that will handle error checking
function checkResponseStatus(res){
  if(res.ok){
    return res
  } else{
    throw new Error(`The hTTP status of the resonse: ${res.status} (${res.statusText})`)
  }
}


const universalisScrape = () => {
  const letsGrabshit = fetch(target,{headers:{'User-Agent':usrAg }})
    .then(result => result.json())
    .then(data => {
      console.log(data)
      return data
    })
    return letsGrabshit
}

let jimmy = universalisScrape()
```


## POST request
The below stuff does a post request.  I will have to revisit this later on and do notes on it when I get a chance.
```
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
  ```