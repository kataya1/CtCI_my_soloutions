function swap(n: number){
    if ( n % 1 > 0)  return "Error"
    let [evenshifted, oddshifted] = [n >> 1 , n << 1]
    return evenshifted & (0xAAAAAAAA >> 1)| (oddshifted & 0xAAAAAAAA)
}
console.log(swap(0b1010))  // 5
console.log(swap(0b1100))  // 12
console.log(swap(0b101))  // 10