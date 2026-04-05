function fabiconchi(n){
    let a = 0;
    let b = 1;
for( let i = 0; i < n; i++){
    console.log(a)

    let next = a + b
    a = b;
    b = next;

}
}
console.log(fabiconchi(2))


function fabonacci(N){
    if(N <= 1) return N;
     return fabonacci(N - 1) + fabonacci(N -2)
}
console.log(fabonacci(2))