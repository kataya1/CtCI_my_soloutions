const isSubstring = ( s1: string, s2: string) : boolean =>{
    return s1.includes( s2)
}

const isStringRotation = (s1: string, s2: string) : boolean => {
    return isSubstring(s1+s1, s2)
}

console.log(isStringRotation('baby', 'byb')) //true
console.log(isStringRotation('god', 'dog'))  //false
console.log(isStringRotation('waterbottle', 'erbottlewat')) //true
