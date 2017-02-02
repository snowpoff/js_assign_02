/* create a function that takes an array of numbers and returns a new array containing
those numbers with the number 2 added to each.

so [1, 2, 3] would return a new array [3, 4, 5]

don't use .map()

*/

// build the first array from passed values

let passedvalues = process.argv
let array = []
let arrayPlusTwo = []

for (let i = 2; i <= (passedvalues.length - 1); i++){
    if(!isNaN(Number(passedvalues[i]))){
        array.push(Number(passedvalues[i]))
    }
}
    
// build the second array from the first array and returns it

function plusTwo() {
  for (let j = 0; j < array.length; j++){
      arrayPlusTwo.push((array[j] + 2))
  }  
    /* following lines for checking purposes
    console.log(array)
    console.log(arrayPlusTwo)
    */
    
    return arrayPlusTwo;
};

plusTwo();