// create a function that loops over an array and displays the arrays index and value like this: index: value 0: 1 1: 'dog' 2: 'one'

function arrayLoop(){
    
// build the array from passed values
    let passedvalues = process.argv
    let array = []

    for (let i = 2; i <= (passedvalues.length - 1); i++){
        array.push(passedvalues[i])
    }

// loop over this array and display index: value
    for (let j = 0; j < array.length; j++ ){
        console.log(j + ": " + array[j])
    }
};

// run this function

arrayLoop();