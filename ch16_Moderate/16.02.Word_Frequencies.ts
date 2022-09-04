
const bookCashe = (book: string) => {
    let arr = book.toLowerCase().split(/\W+/g)
    console.log(arr)
    let m = new Map<string, number>()
    arr.forEach(element => m.has(element) ? m.set(element, m.get(element)! + 1) : m.set(element, 1))
    console.log(m)
    console.log(m.get('is'))
    return (word: string) => m.get(word.toLowerCase().trim()) ?? 0
}

let wordFrequancy = bookCashe(`"The drink is good" said Thor, "another". "what is this madness"`)

console.log(wordFrequancy('the'))
console.log(wordFrequancy('is'))
console.log(wordFrequancy('a8'))