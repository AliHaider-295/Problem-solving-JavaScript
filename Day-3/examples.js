
// proucts = [
//     { name: "phone", price:300},
//     { name: "laptop", price:700},
//     { name: "Mouse", price:100}

// ]
// const maxPrice = Math.max(...proucts.map(p=> p.price)) ;
// console.log(maxPrice)

//  Remove Duplicates form give an array

let arr = [10,23,30,40,40,49,49,49,20]
// // const unique = [...new (arr)]
// // console.log(unique)

// const uniqueNew = arr.filter((values, index)=>{
//       return arr.indexOf(values) === index
// })
// console.log(uniqueNew)


const freqency = {};

for( let num of arr){
    freqency [num] = (freqency [num] || 0) + 1
}
console.log(freqency)