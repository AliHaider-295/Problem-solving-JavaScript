

// reverse a string

function reversedString(InputString){
    if( typeof InputString !== "string"){
        throw new Error("Input should be string")
    }

    let reversed = InputString.split("").reverse().join("")
     return reversed;
}
console.log(reversedString("47245"))




function reversedNewString(str){

let result = "";

for( let i = str.length -1; i >= 0; i--){
    result += str[i] 
}
return result;




}
console.log(reversedNewString("india"))




// check palindrome 


function checkPalindrome(InputPalindrome){

    return InputPalindrome === InputPalindrome.split("").reverse().join("")
 if( InputPalindrome === InputPalindrome){
 return true
 }
 else{
    return false;
 }
}
console.log(checkPalindrome("madam"))





function isPalindromeCheck(inputforPalindrome){

    for(let i = 0; i <= inputforPalindrome.length /2; i++){
        if(inputforPalindrome[i] !== inputforPalindrome[inputforPalindrome.length -1 -i]){
            return false;
        }
        return true   
    }

}
console.log(isPalindromeCheck("f2las"))


// find the largest number in the array

let arr = [23,45,66,5,77,88]
// const max = Math.max(...arr)
//     console.log(max)


   let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);