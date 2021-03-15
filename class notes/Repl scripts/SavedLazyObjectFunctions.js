

// Does the property exist and is it an array
function PropandArray(obj, key){
  // bonus points,check to make sure its not 0
  if (obj.hasOwnProperty(key) === false || Array.isArray(obj[key]) ===false){
    return false
  //blank array
  }else if (obj[key].length === 0) {
  return false
}else{
  return true
}}

// Gets the odd Elements at a property, if it exist
function getOddElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
    var oddArray = []
    var target = obj[key]
    if (PropandArray(obj,key)){
        for (const elem in target){
            if (isOdd(target[elem])){
                oddArray.push(target[elem])
                
            }}
    }
    return oddArray
        
  /* END SOLUTION */
}



// This gets the square of a property, if it exist
function getSquaredElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  var sqrsArray = []
  var target = obj[key]
    if (PropandArray(obj,key)){
        for (const elem in target){
            sqrsArray.push(Math.pow(target[elem],2))
            
        }
        return sqrsArray
    }else{
        return sqrsArray
    }
  /* END SOLUTION */
}