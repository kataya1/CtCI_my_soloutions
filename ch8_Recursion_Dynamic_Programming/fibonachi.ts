
let fibonachi = ( n: number, a: number = 0, b = 1): number =>{
    if ( n == 0 || n == 1) return n
    if ( n == 2 ) return a + b
    return fibonachi( n - 1 , b, a + b)
}


console.log(fibonachi(0)) 
console.log(fibonachi(1)) 
console.log(fibonachi(10)) 
console.log(fibonachi(50))
