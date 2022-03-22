const isPalindromPermutation = (s: string): boolean =>{
    let set = new Set()
    let cs = s.trim().toLowerCase().split(' ').join('')
    console.log(cs)
    for (let l of cs){
        set.has(l) ? set.delete(l) : set.add(l)
    }
    return cs.length % 2 === set.size

}

console.log(isPalindromPermutation('ta   ct Coa'))
console.log(isPalindromPermutation('lIbli'))
