// n, m = ob1 << 32 , positions i , j 
// what if j - i > M do we include the preceeding 0's in M
// n = 0b1000010010 
// m = 0b1011
// i = 2
// j = 7
// [ i , j]
const insertion = (n: number, m: number, i: number, j: number): number=>{
    //  clear bits between [2, 6]  = j - i + 1 = 6 - 2 + 1 = 5
    let newN = clearBitsMStoI(n, j) | clearBitsIthto0(n, i)
    let bit: boolean
    for (let c = i; c <= j; c++){
        bit = ( m % 2 )? true : false
        m = Math.floor(m / 2)
        newN = updateBit(newN, c, bit)
    }
    return newN
}
// get, set, clear, update

function getBit(n: number, i: number): boolean{
    return  (n & (1 << i )) !== 0
}

function setBit(n: number, i: number): number{
    'make ith bit 1'
    
    return n | ( 1 << i)
}

function clearBit(n: number, i:number ): number{
    return n & ~(1 << i)
}
function clearBitsMStoI(n: number, i: number){
    // [i, 32]
    return n & ( (1 << i ) - 1 )
}
function clearBitsIthto0(n: number, i: number){
    // [0, i]
    let mask = -1 << (i + 1)
    return n & mask
}
function updateBit(n: number, i: number, v: boolean): number{
    return (n & ~(1 << i)) | (v ? 1 : 0) << i
}

// 
function dec2bin(dec:number){ 
  return (dec >>> 0).toString(2); 
} 
let n = 0b10100000001
let m = 0b10011
let i = 2
let j = 6
let output = dec2bin(insertion(n, m , i , j ))
console.log({n , m , output})
