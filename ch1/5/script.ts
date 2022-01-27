
let isOneChangeAway = (s1: string, s2: string): boolean => {
    // O(n) string concatination, set initialization 
    if ( s1.length === s2.length ){
        let set = new Set(s1 + s2)
        return set.size === s1.length + 1
    }else if (s1.length - s2.length === Math.abs(1)){
        let maxLength: number;
        s1.length > s2.length ? maxLength = s1.length : maxLength = s2.length
        let s3 = s1 + s2
        let set = new Set(s3)
        return set.size === maxLength 
    }else
        return false
}

console.log(isOneChangeAway("pale", "ple"))
console.log(isOneChangeAway("pales", "pale"))
console.log(isOneChangeAway("pale", "bale"))
console.log(isOneChangeAway("pale", "bake"))