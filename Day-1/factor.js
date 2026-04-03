//  find the factor of the number 


function calculatFactors(InputNumber){

if(InputNumber < 1){
    throw new Error("Input number should be postive and greater or equal to 1")
} 
let result = [];
for(let i = 1; i <= InputNumber; i++){
    if(InputNumber % i === 0){
    result.push(i)
   
    }
   
}

return result

}
console.log(calculatFactors(1000))