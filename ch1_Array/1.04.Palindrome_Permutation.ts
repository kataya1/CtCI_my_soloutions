// Brute create all the permutation 

function generateAllPerms(s: string) {
    const result: string[] = []
    function perm(curr: string[] = [], sArr: string[]) {
        if (sArr.length == 0) result.push(curr.join(''))
        else {
            for (let i = 0; i < sArr.length; i++) {
                let k = sArr[i]
                curr.push(k)
                sArr.splice(i, 1)
                perm(curr, sArr)
                curr.pop()
                sArr.splice(i, 0, k)
            }
        }
    }
    perm([], [...s])
    return (result)
}
function isPalindrome(str: string) {
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase()

    for (let i = 0, mid = str.length >> 1; i < mid; i++) {
        if (str[i] != str[str.length - 1 - i]) return false
    }
    return str.length > 0
}
function checkPermutationOfPalindrome(s: string): boolean {
    let r = generateAllPerms(s)
    console.log(r)
    for (let p of r) {
        if (isPalindrome(p)) return true
    }
    return false
}
// console.log(checkPermutationOfPalindrome("caa"))
// console.log(checkPermutationOfPalindrome("aa"))
// console.log(checkPermutationOfPalindrome("azaz"))
// console.log(checkPermutationOfPalindrome("z"))
// console.log(checkPermutationOfPalindrome("zar"))

console.log(generateAllPerms("abcde"))

// sort and check if there is one or none odd numbers

// use hashmap 
const isPalindromPermutation = (s: string): boolean => {
    let set = new Set()
    let cs = s.replace(/[^a-z0-9]/i, '').toLowerCase()
    console.log(cs)
    for (let l of cs) {
        set.has(l) ? set.delete(l) : set.add(l)
    }
    // if cs length is even set will have nothing so 0 == 0 or something 0 == x
    // if cs lenght is odd. set will have 1 element so 1 == 1 or more 1 == x (where x > 1)
    return cs.length % 2 === set.size
}

console.log(isPalindromPermutation('ta   ct Coa'))
console.log(isPalindromPermutation('lIbli'))
