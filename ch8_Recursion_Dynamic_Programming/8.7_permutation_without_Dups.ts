let perms = (s: string) => {
    // very very bad
    let cont: string[][][] = Array(s.length).fill(new Array())   
    cont[0] = [...s].map(x => [x])
    for (let i = 1; i < cont.length ; i++){
        for ( let j = 0; j < cont[i - 1].length; j++){
            for (let k=0 ; k < cont.length; k++){
                if ( s[i] != s[k]   ){
                    let x = Array(...cont[i-1][j])
                    x.push(s[k])
                    cont[i].push(x)
                } 
            }
        }
        // cont[i-1] = []
    }
    return cont
}

console.log(perms('ac'))