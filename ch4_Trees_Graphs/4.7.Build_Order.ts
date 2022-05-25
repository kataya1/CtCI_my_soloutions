//build order 
class Gnode{
    data: string
    dependencies: Gnode[] = []
    visited: boolean
    taken: boolean
    constructor(d: string ){
        this.data = d
        this.visited = false
        this.taken = false

    }
}

class Graph{
    private nodes: Map<string, Gnode> = new Map()
    private initNodes(projects: string[], dependencies: [string,string][]): void{
        this.nodes = new Map()
        for(let project of projects){
            this.nodes.set(project, new Gnode(project))
        }
        for(let [d, p] of dependencies){
            this.nodes.get(p)?.dependencies.push(this.nodes.get(d)!)
        }
    }

    buildOrder(projects: string[], dependencies: [string,string][]): string[]{
        this.initNodes(projects, dependencies)
        let order: string[] = []
        let valid = true
        // loop over values in map
        for ( let v of this.nodes.values()){
            valid &&= this.checkValid(v, order)
            if ( valid == false) break
        }
        return valid ? order : []

    }
    private checkValid(n: Gnode, order: string[]): boolean{
        if (n.visited == true) return false
        if (n.taken == true) return true
        let valid = true
        n.visited = true
        for( let d of n.dependencies){
           valid &&= this.checkValid(d, order)
           if (valid == false) break
        }
        n.visited = false
        if (valid){
            n.taken = true
            order.push(n.data)
            return true
        }else
            return false
    }
}

let g = new Graph()
console.log( 
    g.buildOrder(['a','b','c','d','e','f'], [['a','d'],['f','b'],['b', 'd'], ['f','a'],['d','c']])
) //expected ['f','e','a','b','d','c']
console.log( 
    g.buildOrder(['a','b','c'], [['a','c'],['c','a']])
) // expected []
console.log( 
    g.buildOrder(['a','b','c'], [['b','a'],['c','b']])
) // expected ['c','b','a']


function buildOrderItterative(projects: string[], dependency_map:[string,string][]): string[]{
    let pMap = new Map<string, string[]>()
    let unfinished = new Set<string>()
    let order = []
    // init pMap and unfinished 
    for(let p of projects){
        unfinished.add(p)
        pMap.set(p, [])
    }
    for ( let [ d, p] of dependency_map ){
        pMap.get(p)?.push(d)
    }
    for (let _ of projects){
        for (let p of projects){
            let done = true
            for (let d of pMap.get(p)!){
                if( unfinished.has(d)){
                    done = false
                }
            }
            if (done && unfinished.has(p)){
                unfinished.delete(p)
                order.push(p)
            }
        }
        if (unfinished.size == 0) break
    }
    if (unfinished.size == 0)
        return order
    else 
        return []
}
console.log( 
    buildOrderItterative(['a','b','c','d','e','f'], [['a','d'],['f','b'],['b', 'd'], ['f','a'],['d','c']])
) //expected ['f','e','a','b','d','c']
console.log( 
    buildOrderItterative(['a','b','c'], [['a','c'],['c','a']])
) // expected []
console.log( 
    buildOrderItterative(['a','b','c'], [['b','a'],['c','b']])
) // expected ['c','b','a']
