// Brute create all the permutation 

function generateAllPerms(s: string) {
    const result: string[] = []
    function perm(curr: string[] = [], sArr: string[]) {
        if (sArr.length == 0) result.push(curr.join(''))
        else {
            for (let i = 0; i < sArr.length; i++) {
                let k = sArr[i]
                curr.push(k)
                sArr.splice(i, 1)
                perm(curr, sArr.splice(i, 1))
                curr.pop()
                sArr.splice(i, 0, k)
            }
        }
    }
    perm([], [...s])
    return (result)
}



// sort and check if there is one or none odd numbers

// use hashmap 