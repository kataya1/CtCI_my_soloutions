// number of trailing zeros in a factorial


//fails if n>23
function S0(n) {
    let factorial = 1
    let numTrailingZeros = 0
    for (let i = 1; i <= n; i++) factorial *= i
    for (let j = factorial; j % 10 == 0; j = j / 10) numTrailingZeros += 1
    return numTrailingZeros
}

// needs to compute the factorial
function S1(n) {
    let x = 1n
    let num = 0
    for (let i = 1n; i <= n; i++) x *= i
    console.log(x)
    for (let j = x; j % 10n == 0; j = j / 10n) num += 1
    return num
}

// give the wrong input after n24
function s2(n) {
    return Math.floor(n / 5)
}

// 
// hypothis: 25 is 6 zeros not 5 because 25/5 = 5 which needs another step 5 /5 = 1
function s3(n) {
    let acc = 0
    for (let x = Math.floor(n / 5); x > 0; x = Math.floor(x / 5)) acc += x
    return acc
}
const args = process.argv;
const num = +args.at(-1)

console.log(S1(num))
console.log(s2(num))
console.log(s3(num))
