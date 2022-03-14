// n, m = ob1 << 32 , positions i , j 
// what if j - i > M do we include the preceeding 0's in M
const insertion = (n: number, m: number, i: number, j: number): number=>{
    // n = 0b1000010010 
    // m = 0b1011
    // i = 2
    // j = 7
    //  clear bits between [2, 6]  = j - i + 1 = 6 - 2 + 1 = 5
    // let window = j - i + 1
    // let mask = ( 2 **( j + 1) - 1) 
    // n & (0 << i) 
    
    return 0b111
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

function updateBit(n: number, i: number, v: boolean): number{
    return (n & ~(1 << i)) | (v ? 1 : 0) << i
}