function parens(n: number, arr =  [new Set("()") ]): string[]{
    if (n < 1 ) return [""]
    if (!arr[n])
        arr[n] = new Set([...parens(n-1, arr).map(v=>  `(${v})`), ...parens(n-1, arr).map(v =>  `()${v}`), ...parens(n-1, arr).map(v=>  `${v}()`)] )
    return [...arr[n]]
}

console.log( parens(2))
console.log( parens(3))
console.log( parens(4))