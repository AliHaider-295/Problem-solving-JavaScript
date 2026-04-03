// write a function that count the vowels and print them and also count the consonts as well and print them 


function calculateVowelsAndConsonants(InputString){

InputString = InputString.toLowerCase();
InputString = InputString.replace(/ /g,"");

const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";

let vowelsCount = 0;
let consonantsCount = 0


for( let i = 0; i <=InputString.length -1; i++){
  if(vowels.includes(InputString[i])){
    vowelsCount++;
  }
  else if(consonants.includes(InputString[i])){
    consonantsCount++;
  }
}
return { vowelsCount, consonantsCount}

}
console.log(calculateVowelsAndConsonants("Pakistan7"))




















































function countVowelAndConsonants(InputString){
        InputString = InputString.toLowerCase();
    const vowel = "aeiou";
    const consonts = "bcdfghjklmnpqrstvwxyz"

    let vowelCount = 0;
    let consontsCount = 0;

    for( let i = 0; i <= InputString.length-1; i++){
           if(vowel.includes(InputString[i])){
              vowelCount++;
    }
    else if(consonts.includes(InputString[i])){
        consontsCount++;
    }
    
    }
    return { vowelCount , consontsCount}
   

}
console.log("",countVowelAndConsonants("HelloWorld"))