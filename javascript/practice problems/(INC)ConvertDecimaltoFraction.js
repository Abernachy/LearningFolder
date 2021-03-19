/*

Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.

Example: toFraction(0.5) === '1/2'

Whole numbers and mixed fractions should be returned as irregular fractions

Example: toFraction(3.0) === '3/1'

Example: toFraction(2.5) === '5/2'


Tester Cases:
1.0 === 1/1

.25 = 1/4

.888 = 22/25

.253213 = 253213/1000000

/*

//TODO - Figure out the math to convert a decimal to a faction
/*
1 To convert a decimal to a fraction, place the decimal number over its place value. For example, in 0.6, the six is in the tenths place, so we place 6 over 10 to create the equivalent fraction, 6/10. If needed, simplify the fraction.

2  Multiply the numerator and demonimator by 10^x based on the digits to the right of the decimal place.
      Code Terms - Keep multiplying by 10 until you DO NOT have a remainder.  Save that 10x multiplier as a its own number

    2.625 => 2.625 / 1 
            (2.625/1)  * (1000/1000) = 2625/1000

3. Find the GCF of the two numbers: (2625, 1000)
Do it via factorization
  Take each number and have it run through a range of numbers leading from [1...number], then for each number it will divide by the number in the range.  If the number does not have a remainder, it will push the number to an array.  It will do this for both.


4 Compare the 2 arrays for the same numbers, push those numbers to a separate array, and then do Math.Max on that bitch, to get the GCF

5 Divide both numberator and denominator by GCF

  
    

*/
function factorization(number){
  let numArray = []
  let numRange = [...Array(number).keys()]

  for (const element in numRange){
    if (number % numRange[element]===0){
      numArray.push(numRange[element])
    }
  }
  return numArray
}


function convertToFrac(number){
  let denom = 1
  let numerator = number

  // As detaile above, multiply each by 10 until you get no remainder
  while (numerator % 10 ===1){
    numerator *=10
    denom *=10
  }
  // Take each number and have run through a range leading to its factors
  let numArray = factorization(numerator)
  let denomArray = factorization(denom)

  // Loop through numerator and denominator, comparing them for simliarities, push the identical values to another array

  let gcf = numArray.filter(element => denom.includes(element))

  console.log(gcf)
  
}

console.log(convertToFrac(.888))