"use strict";
const hasUniqueChars = (s) => {
    // O(n)
    let uniqueVals = new Set();
    for (let i of s) {
        if (uniqueVals.has(i))
            return false;
        uniqueVals.add(i);
    }
    return true;
};
const hasUniqueChars2 = (s) => {
    // O( nlogn)
    let sortedS = [...s].sort();
    for (let i = 0; i < sortedS.length - 1; i++) {
        if (sortedS[i] === sortedS[i + 1])
            return false;
    }
    return true;
};
let a = "n39ri1yaim";
let b = "abcdefghijklmmnopqrstuvwxyz";
console.log(hasUniqueChars(a));
console.log(hasUniqueChars(b));
console.log(hasUniqueChars2(a));
console.log(hasUniqueChars2(b));
// test 

module.exports = hasUniqueChars