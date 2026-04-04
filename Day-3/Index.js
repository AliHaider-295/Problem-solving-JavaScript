

// reverse a string

function reversedString(InputString){
    if( typeof InputString !== "string"){
        throw new Error("Input should be string")
    }

    let reversed = InputString.split("").reverse().join("")
     return reversed;
}
console.log(reversedString("47245"))






