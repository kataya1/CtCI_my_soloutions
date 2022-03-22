// 'aabcccccaaa' => 'a2b1c5a3'
// 'abcada' => 'a1b1c1a1d1a1'
const addToArr = (arr: string[], letter: string, num: number): void => {
    arr.push(`${letter}${num}`)
}
const strComp = (s: string): string =>{
    if( !s || s.length <= 2){
        return s
    }
    s = s.toLowerCase()
    let concatArr : string[] = [];
    let currentLetter: string = s[0];
    let count: number = 0;
    let slen: number = s.length 
    for ( let i = 0; i < slen; i++){
        if (concatArr.length * 2 >= s.length) return s
        if (s[i] !== currentLetter){
            addToArr(concatArr, currentLetter, count)
            currentLetter = s[i]
            count = 1
        }else count += 1

        if (i === slen - 1)
            addToArr(concatArr, currentLetter, count)
    }
    return concatArr.length * 2 >= s.length? s : concatArr.join('')
}

console.log(strComp('aabcccccaaa'))
console.log(strComp('abcada'))
console.log(strComp('a'))
console.log(strComp('bb'))
console.log(strComp(''))
console.log(strComp('AaAa'))
