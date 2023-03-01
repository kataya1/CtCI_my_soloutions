
export const hasUniqueChars = (s: string): boolean => {
    // O(n)
    let uniqueVals = new Set()
    for (let i of s) {
        if (uniqueVals.has(i)) return false
        uniqueVals.add(i)
    }

    return true
}

export const hasUniqueChars2 = (s: string): boolean => {
    // O( nlogn)
    let sortedS = [...s].sort()
    for (let i = 0; i < sortedS.length - 1; i++) {
        if (sortedS[i] === sortedS[i + 1]) return false
    }
    return true
}

// let a = "abc"
// let b = "abcda"
// console.log(hasUniqueChars(a))  //true
// console.log(hasUniqueChars(b))  //false
// console.log(hasUniqueChars2(a)) //true
// console.log(hasUniqueChars2(b)) //false
// test
// module.exports = hasUniqueChars

const hasUniqueChars3 = (s: string): boolean => {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) return false
        }
    }
    return true
}

// ====== 

// JavaScript Uses 32 bits Bitwise Operands
// 00000000000000000000000000000101(5)
// 11111111111111111111111111111010(-5 = -6)

console.log(1 << 0) // 1
console.log(1 << 1) // 2
console.log(1 << 30) // 1073741824
console.log(1 << 31) // -2147483648
console.log(1 << 32) // 1   mening 0 and 32 is equivelant
console.log(1 << 33) // 2
const hasUniqueChars4 = (s: string): boolean => {
    // Won't work because JavaScript Uses 32 bits Bitwise Operands
    let bitVector = 0
    for (let c of s) {
        bitVector
        if ((1 << c.charCodeAt(0) & bitVector) > 0)
            return false

        bitVector = bitVector | (1 << c.charCodeAt(0))
    }
    return true
}

// console.log(hasUniqueChars3("abc")) //true
// console.log(hasUniqueChars3("abcc")) //false
// console.log(hasUniqueChars3("")) //true
console.log(hasUniqueChars4("A!")) //true  but prints false
console.log(hasUniqueChars4("4T")) //true but prints false  //on the same line on the ascii table

// Solution to bit vector problem

const hasUniqueChars5 = (s: string): boolean => {

    let bitVector = 0n
    for (let c of s) {
        if (((1n << BigInt(c.charCodeAt(0))) & bitVector) > 0n)
            return false
        bitVector = bitVector | (1n << BigInt(c.charCodeAt(0)))
    }
    return true
}


console.log(hasUniqueChars5("abc")) //true
console.log(hasUniqueChars5("abcc")) //false
console.log(hasUniqueChars5("arstd hneio12#34%5")) //true but prints false
console.log(hasUniqueChars5("A!")) //true  but prints false
console.log(hasUniqueChars5("4T")) //true but prints false  //on the same line on the ascii table
console.log(hasUniqueChars5("")) //true
