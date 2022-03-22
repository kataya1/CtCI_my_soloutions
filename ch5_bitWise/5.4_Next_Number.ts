//  01101111 s: 01011111   b: 01110111   
//  00100  s: 00010   b: 01000
///  0111  s: none?  b: 1011 
///   01  s: none? b : 10
/// 0101  s: 0011  b: 0110   

// find the nearst 1 and 0 from the right and switch them
function nextNumber(n: number){
    // if (~n == 0 || n == 0) return [n , n]
    let arr = Array.from((n >>> 0).toString(2))
    let leadingZeros = 32 - arr.length 
    
    arr = [ ...Array(leadingZeros).fill('0') ,...arr]
    //copy arr to big and small

    let big = Array.from(arr)
    let  small = [...arr]
    let [smallDone, bigDone] = [false, false]
    for(let i = arr.length - 1; i > 1 ; i--){
        // we want to find a 0 then followed by a 1 and switch them
        if (!smallDone && small[i] === '0' && small[i - 1] === '1'){
            small[i] = '1'
            small[i - 1] = '0'
            smallDone = true
        }
        if (!bigDone && big[i] === '1' && big[i - 1] === '0'){
            big[i] = '0'
            big[i - 1] = '1'
            bigDone = true
        }
    }
    return [small.join(''), big.join('')]

}

console.log(nextNumber(7))
console.log(nextNumber(0b101))
console.log(nextNumber(-5))