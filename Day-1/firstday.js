// Reverse A string with built in mathod

// function reversedString(inputValue){

     
//  if(typeof inputValue !== 'string'){
//     throw new Error("Input should be string")
//  }
   
//    let reversedStr = inputValue.toLowerCase();   
     
//     reversedStr = inputValue.split("").reverse().join("");
//     if( inputValue === reversedStr){
//     return true; 
// }
// else{
//     return false   
// } 
// }

// console.log(reversedString("madam"))  


// Reversed String with help of For loop

function reversedStr1(inputValue1){
 let result =''
for(let i = inputValue1.length-1; i >=0 ; i--){
    result += inputValue1[i]
}
return result

}
// console.log(reversedStr1("Pakistan is lahore dil"))



// check palindrom function with inbuilt function; 

function isPalindrome(InputString){ 
 
    for(let i = 0; i <= InputString.length /2; i ++){
      if( InputString[i] !== InputString[InputString.length -1 - i]){
        return false
      }
      return true; 
    }


}
console.log(isPalindrome("madam2"))


