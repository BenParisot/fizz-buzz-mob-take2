
function fizzBuzz() {
    let integer = document.getElementById('value').value;

    let integerArray = [];

    //for loop over integerArray 

    let result = '';
    const wordOne = 'fizz';
    const wordTwo = 'buzz';
    
    if(integer % 15 === 0) {
        result = wordOne + wordTwo;
    }
    else if(integer % 5 === 0) {
        result = wordTwo;
    }
    else if(integer % 3 === 0) {
        result = wordOne;
    }
    else {
        result = integer;
    }

    //EITHER 
    
    console.log(result);
}
//fizzBuzz();