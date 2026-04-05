// find missing number in array
let arr = [1,2,4,5]
// function findMissingNum(arr, n){
//     const expectedSum = n * (n +1)/ 2
//     const actualSum = arr.reduce((sum, num)=> sum + num, 0)
//     return  expectedSum - actualSum
// }
// console.log(findMissingNum([1,2,4,5,],5))

    

function twoSum (arr, target){

    for( let i = 0; i < arr.length; i ++){
        for( let j = i+ 1; j < arr.length; i ++){
            if (arr[i] + arr[j] === target){
                return arr[i], arr[j]
            }
        }
    }
}
console.log(([2,7,11,15],-2))