function multiply( x: number, y: number): number{
    // check if x and y are integers
    if (x % 1 != 0  && y % 1 != 0) return x * y
    let sum = 0 
    for( let i = 0, j = y ; j > 0 ; i++ , j >>= 1 ){
        if ( ( j & 1 ) == 1){
            sum = sum + (x << i)
        }
    }
    return sum
}


function multiplyRec( x: number, y: number, index = 0): number{
    if ( y === 0 ) return 0
    return  (y & 1 ? x << index : 0 ) + multiplyRec(x, y >> 1, index + 1)
}

console.log(64 * 13) // expected 832
console.log( multiply( 64, 13)) // expected 832
console.log( multiplyRec( 64, 13)) // expected 832