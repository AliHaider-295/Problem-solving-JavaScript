function calculateAverage(InputArray){

let sumofArray = 0;
    for(let i = 0; i < InputArray.length; i++){
        sumofArray += InputArray[i]; 

    }
    let result = sumofArray / InputArray.length
return result
}
console.log(calculateAverage([1,2,88,4]))
