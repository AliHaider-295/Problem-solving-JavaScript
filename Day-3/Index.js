

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
return result

}
console.log(reversedNewString("india"))








