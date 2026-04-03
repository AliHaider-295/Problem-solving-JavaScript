// write a function that return the result of rasing number to a specified power:


function powerNumber (base, exponent){

    let result = 1;

    for( let i = 1; i <= exponent; i++){
        result = result * base
    }
 return result;
}

console.log(powerNumber(2,3))
 
