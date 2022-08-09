// "use strict";
// const isPermutation = (s1, s2) => {
//     if (s1.length === s2.length) {
//         let obj = {};
//         for (let l of s1) {
//             obj.hasOwnProperty(l) ? obj[l] += 1 : obj[l] = 1;
//         }
//         for (let l of s2) {
//             if (obj.hasOwnProperty(l) && obj[l] > 0)
//                 obj[l] -= 1;
//             else
//                 return false;
//         }
//         return true;
//     }
//     return false;
// };
// module.exports = isPermutation;

function perms(str) {
    return str.length < 2 ? [str] :
        str.reduce((result, char, i) => {
            const remainder = str.substring(0, i) + str.substring(i + 1);
            const partialPerms = perms(remainder);
            return result.concat(partialPerms.map(p => char + p));
        }, []);
}

console.log(perms("dog").join("\n"));