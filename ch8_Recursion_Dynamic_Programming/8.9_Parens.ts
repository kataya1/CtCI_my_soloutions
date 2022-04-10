function parens(n: number, arr = [new Set("()")]): string[] {
  if (n < 1) return [""];
  if (!arr[n])
    arr[n] = new Set([
      ...parens(n - 1, arr).map((v) => `(${v})`),
      ...parens(n - 1, arr).map((v) => `()${v}`),
      ...parens(n - 1, arr).map((v) => `${v}()`),
    ]);
  return [...arr[n]];
}

console.log(parens(2));
console.log(parens(3));
console.log(parens(4));

function getParen(list: string[], leftRem: number , rightRem: number, str: string[] = [] , index = 0){
    if ( leftRem < 0 || rightRem < leftRem)
     return 
    if (leftRem == 0 && rightRem ==0)
        list.push( str.join(''))
    else{
        str[index] = '('
        getParen( list, leftRem - 1, rightRem, str, index + 1)

        str[index] = ')'
        getParen( list, leftRem, rightRem - 1, str, index + 1)
    }
}
function parenOptimize(n: number): string[]{
    let  validPerms: string[] = []
    getParen(validPerms, n, n )
    return validPerms
}

console.log(parenOptimize(3))
console.log(parenOptimize(4))