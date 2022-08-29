
let isOneChangeAway = (s1: string, s2: string): boolean => {
    // O(n) string concatination, set initialization 
    if (s1.length === s2.length) {
        let set = new Set(s1 + s2)
        return set.size === s1.length + 1
    } else if (Math.abs(s1.length - s2.length) === 1) {
        let maxLength = s1.length > s2.length ? s1.length : s2.length
        let set = new Set(s1 + s2)
        return set.size === maxLength
    } else
        return false
}

console.log(isOneChangeAway("pale", "ple"))
console.log(isOneChangeAway("pales", "pale"))
console.log(isOneChangeAway("pale", "bale"))
console.log(isOneChangeAway("pale", "bake"))