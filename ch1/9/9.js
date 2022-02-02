const isSubstring = (s1, s2) => {
    return s1.includes(s2);
};
const isStringRotation = (s1, s2) => {
    return isSubstring(s1 + s1, s2);
};
console.log(isStringRotation('baby', 'byb'));
console.log(isStringRotation('god', 'dog'));
console.log(isStringRotation('waterbottle', 'erbottlewat'));
