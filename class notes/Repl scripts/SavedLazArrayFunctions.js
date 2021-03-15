function isArrayEmpty(arr){
    if (arr.length === 0){
        return true
  }else {
        return false
  }}
  function filterOddLengthWords(words) {
    // your code here
    /* START SOLUTION */
      var oddarray = []
      for (const elem in words){
          if (isOdd(words[elem].length))
          oddarray.push(words[elem])
      }
      return oddarray
    /* END SOLUTION */
  }
  
  function filterEvenLengthWords(words) {
    // your code here
    /* START SOLUTION */
  /* START SOLUTION */
      var oddarray = []
      for (const elem in words){
          if (isEven(words[elem].length))
          oddarray.push(words[elem])
      }
      return oddarray
    /* END SOLUTION */
  }
  
  function getLengthofLongestElement(arr){
    var totalsArray = []
    if (arr.length === 0){
        return 0
    }else{
    for (const elem in arr){
        totalsArray.push(arr[elem].length)
    }
      return Math.max(...totalsArray)
  }
  }
  // Works on numbers only
  function getLengthofsmalletElement(arr){
    var totalsArray = []
    if (arr.length === 0){
        return 0
    }else{
    for (const elem in arr){
        totalsArray.push(arr[elem])
    }
      return Math.min(...totalsArray)
  }
  }
  
  function getLengthofLargestElement(arr){
    var totalsArray = []
    if (arr.length === 0){
        return 0
    }else{
    for (const elem in arr){
        totalsArray.push(arr[elem])
    }
      return Math.max(...totalsArray)
  }
  }
  
  // added this in here for picking, requires PropandArray
  function getAllButLastElementOfProperty(obj, key) {
    // your code here
    /* START SOLUTION */
      var target = obj[key]
      var newArray=[]
    if (PropandArray(obj,key)){
        for (var i = 0; i < target.length - 1; i++ ) {
        // I couldn't think of a way to get this working via for-in loop
        newArray.push(target[i])
        }
        return newArray
      }else{
      return []
    /* END SOLUTION */
  }}
  
  function computeProductOfAllElements(arr) {
    // your code here
      var prodTotal = 1
    if (isArrayEmpty(arr)){
        return 0
    } else {
        for (const element in arr){
            prodTotal *= arr[element]
        }
    }return prodTotal
    
  }
  
  function getLongestElement(arr) {
    // your code here
      var highestString
      var currentStr = 0
    if (arr.length === 0){
        return ''
    }else{
    for (const elem in arr){
          if( currentStr < arr[elem].length){
              currentStr = arr[elem].length
              highestString = arr[elem]
          }
    } return highestString
      
  }
  }
  
  // Joining Nested arrays, uses the reduce function and the fat arrow for ES6
  function joinArrayOfArrays(arr) {
    // your code here
    let combined = arr.reduce((a,b) => a.concat(b),[]);
    return combined
  }


 //***--------------------ES6 implementations-------------------***
 // Return an array of even numbers
 // const even = arr.filter(number => number %2 ===0)

 // Return an array of odd numbers
// const even = arr.filter(number => number %2 ===1)

// Return smallest number in an array
// const lengthOfShortest = Math.min(...arr.map(element => element.length))

// Return largest number in an array
// const lengthOfShortest = Math.max(...arr.map(element => element.length))
