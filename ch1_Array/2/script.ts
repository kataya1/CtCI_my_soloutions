const isPermutation = (s1: string, s2: string): boolean => {

    // is 'dog' a permuatoin of 'god"
    interface strobj {
        [key: string]: number
    }
    if (s1.length === s2.length) {
        let obj: strobj = {}
        for (let l of s1) {
            obj.hasOwnProperty(l) ? obj[l] += 1 : obj[l] = 1
        }
        for (let l of s2) {
            if (obj.hasOwnProperty(l) && obj[l] > 0) obj[l] -= 1
            else return false
        }
        return true
    }
    return false
}

// module.exports = isPermutation
// sort and check equal 
const isPermutation2 = (s1: string, s2: string): boolean => {
    return [...s1].sort((a, b) => a < b ? 1 : -1) == [...s2].sort((a, b) => a < b ? 1 : -1)
}

// Brute: Create all possible orderings of characters in s1 and compare with s2
function perms(str: string): string[] {
    if (str.length < 2) {
        return [str];
    }
    let result: any = [];

    for (var i = 0; i < str.length; i++) {
        var remainder = str.substring(0, i) + str.substring(i + 1);
        console.log("remainder = " + remainder)
        var partialPerms = perms(remainder);

        for (var j = 0; j < partialPerms.length; j++) {
            result.push(str[i] + partialPerms[j]);
        }
    }
    return result;
}
function arePermutations(str1: string, str2: string): boolean {
    // If lengths are not equal, cannot be permutations
    if (str1.length !== str2.length) return false;

    // Store char counts in an object
    const counts: { [key: string]: number } = {};
    for (let char of str1) {
        counts[char] = (counts[char] || 0) + 1;
    }

    // Check off characters in second string
    for (let char of str2) {
        if (!counts[char]) return false; // No more of this char left
        counts[char]--;
    }

    return true;
}
console.log(arePermutations('dog', 'god'))
console.log(arePermutations('dog', 'God'))
console.log(arePermutations('dogg', 'doog'));
console.log(arePermutations('dogg', 'duog'));