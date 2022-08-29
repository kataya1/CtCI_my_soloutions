
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
function isOneAway(str1: string, str2: string) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    var diffs = 0;
    for (var i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
        if (str1[i] != str2[j]) {
            diffs++;
            if (str1.length > str2.length) j--;
            else if (str1.length < str2.length) i--;
        }
        if (diffs > 1) return false;
    }
    return diffs <= 1;
}
console.log('whasnt')
console.log(isOneAway("pale", "ple"))
console.log(isOneAway("pales", "pale"))
console.log(isOneAway("padle", "pale"))
console.log(isOneAway("padfe", "pale"))// false
console.log(isOneAway("pale", "bale"))
console.log(isOneAway("pale", "bake"))// false