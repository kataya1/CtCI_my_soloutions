// sufficient space to hold the additional chars
// given: true lenght of string 
// ex input: "Mr John Smith      " 13 
// 

const urlify = (s: string, n: number): string => {
    let charArr = [...s]
    console.log(charArr)
    let j = n -1 ;
    for (let i = charArr.length - 1; i >= 0; i--){
        
        console.log(j)
        console.log(i)
        if (charArr[j] === " "){
            charArr[i] = '0'
            charArr[i - 1] = '2'
            charArr[i - 2] = '%'
            i -= 2
        }
        else{
            charArr[i] = charArr[j]
        }
        j -= 1
    }
    return charArr.join('')
}

console.log(urlify("Mr John Smith    ", 13))
console.log(urlify("Mr John  ", 7))