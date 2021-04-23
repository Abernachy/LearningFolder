# Express notes

All right, this is to get some notes set up researching how to use express for how I want and some use cases that I can copy + paste later, since the fucking documentation is not as hand holdy as I wish it was.

Also, please be aware these notes are subject to become outdated, so look for the documentation at: 

http://expressjs.com/en/api.html#express.router

# WTF is express?

Express is a middle-ware tool for APIs.  It acts as the request receiver when a fetch request is made to an end point


--------------------                                                                  ----------------------
|user clicks button| - onClick / useEffect / etc Fetch request to /{api} endpoint  -> | block of code runs  |
--------------------                                                                  ----------------------

```
//example:
A fetch(/users/1) is made, express receives it and returns a response
app.get('/users/1', (req,res) => {
  res.send('Snake Titties')
}
```

## Parameters

An endpoint can be recieved and its contents can be modified in a few ways using either req.params or req.query

** The difference between the 2: **

Given:
app.get('/hi/:param1', (req,res){});

and given a URL: http://www.google.com/hi/there?qs1=you&qs2=tube

req.query returns an object:
{
  qs1: 'you',
  qs2: 'tube'
}

req.params returns:
{
  param1: 'there'
}

It's up to you to decide what approach you can use.  
You can use req.query to specify certain IDs in a request ( stuff/req?shit=1&pancakes=2)  

OR

You can use req.params to specify things like a whole row of data based on whats after the / : (stuff/1 , stuff/2)  

# Misc notes based on uses/cases/etc





## express.json()
  app.use(express.json())  // This goes towards the top, just afer your imports


# Example code
Please be aware, future me, these were done before I refactored the code, if I even did that at all, lols.
Also, do something nice for the wife, if you are still reading this.
```
// This is from the Galvanize back end project I did.

onst express = require('express')
const knex = require('knex')(require('./knexfile.js')["development"]);
const cors = require('cors')
const app = express()
const port = 3001

//PLEASE PUT THIS IN THE LEARN. need this or else req.body is undefined
app.use(express.json());
// Fix the CORS error when importing data into react
// requires npm install cors
app.use(cors())

app.get('/', (req,res) => res.send('Hello'))

app.listen(port, () => console.log('Listening to port: ' + port))


//Send the data from our locations table using Knex, more notes in the express with knex notes file in this directory

app.get('/locations', (req,res)=>{
    knex
    .select()
    .from("locations")
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(404).json({
            message: 'Data not found'
        }))

// Post and Delete
app.post('/ads', (req,res) => {
    console.log(req.body)
    knex('posts').insert(req.body)
    .then( (result) => {
        res.json({ success: true, message: 'ok'})
    })
    .catch( (err) =>{
        res.json({message:"No Go " + err})
    })
})

app.delete('/ads', (req, res) => {
    let postsid = req.body.postsid
    knex("posts").where({postsid: postsid}).del()
    .then(result => res.json({success:true, message: "Ad deleted"}))
    .catch(err => res.json({message: err}))
})

app.patch('/ads', (req, res) => {
  
    console.log(req.body)
    
    knex("posts").where({postsid: req.body.postsid}).update(req.body)
    .then(result => res.json({success:true, message: "Ad updated"}))
    .catch(err => res.json({message: err}))
})

```