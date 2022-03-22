
function conversion(a: number, b: number){
    let ans = a ^ b 
    return Array.from(ans.toString(2)).reduce((acc, current) => current === '1' ?  ++acc : acc, 0)
}

console.log(conversion(29, 15))