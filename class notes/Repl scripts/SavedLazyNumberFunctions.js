// Is it even ? 
function isEven(num){
    if (num %2 ===0){
        return true
    }else {
        return false
    }
}

// Is it odd?
function isOdd(num){
    if (num %2 ===1){
        return true
    }else {
        return false
    }
}

// Is it a number?
function iheartnumbers(value){
    if (typeof value === "number"){
        return value
    }
}

//Generate a number range
function NumRange(start,stop,step){
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
  return range(start,stop,step)
}




// Saved before the test
// variables
var jimmy = [1,2,3,4,6,7,9, -1,-2,-4]
var shelly = {}


// Iterate over the the array to restructure it as an object
for (const element in jimmy)
  shelly[element] = jimmy[element]

console.log(shelly)
// Its now restructured and we want to grab the highest value 

// Iterate again over the properties to find that value and return the property


