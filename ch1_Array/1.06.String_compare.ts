// 'aabcccccaaa' => 'a2b1c5a3'
// 'abcada' => 'a1b1c1a1d1a1'
const addToArr = (arr: string[], letter: string, num: number): void => {
    arr.push(`${letter}${num}`)
}
const strComp = (s: string): string => {
    if (!s || s.length <= 2) {
        return s
    }
    s = s.toLowerCase()
    let concatArr: string[] = [];
    let currentLetter: string = s[0];
    let count: number = 0;
    let slen: number = s.length
    for (let i = 0; i < slen; i++) {
        if (concatArr.length * 2 >= s.length) return s
        if (s[i] !== currentLetter) {
            addToArr(concatArr, currentLetter, count)
            currentLetter = s[i]
            count = 1
        } else count += 1

        if (i === slen - 1)
            addToArr(concatArr, currentLetter, count)
    }
    return concatArr.length * 2 >= s.length ? s : concatArr.join('')
}
let strcompAug29 = (s: string): string => {
    if (!s) return s
    s = s.toLowerCase()
    let arr: string[] = []
    let current = s[0]
    let count = 0
    for (let c of s)
        [current, count] = scomp(c, current, arr, count)
    scomp("$$", current, arr, count)
    return arr.length * 2 < s.length ? arr.join('') : s
}
function scomp(c: string, current: string, arr: string[], count: number): [string, number] {
    if (c == current)
        return [current, count + 1]
    else
        arr.push(`${current}${count}`)
    return [c, 1]
}

function compress(str: string): string {
    const compressed: string[] = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed.push(str[i] + count);
            count = 1;
        }
    }
    return compressed.join("").length < str.length ? compressed.join("") : str;
}

console.log(compress('aabcccccaaa'))// a2b1c5a3
console.log(compress('abcada'))// abcada
console.log(compress('a'))// a
console.log(compress('bb'))// b2
console.log(compress(''))// 
console.log(compress('AaAa'))// a4
