import { Queue } from './helpers'
let nodes = [ 1, 2 ,3 , 4, 5,  6, 7, 8]
type route = [number, number]
let routes: route[]= [ [1, 2],
                [2,3],
                [2,4],
                [3,4],
                [4,3],
                [3,8],
                [3,5],
                [5,1],
                [6,8],
                [7,8]
         ]
class graph{
    graph = new Map<number, number[]>()
    addNode(n: number){
        this.graph.set(n, [])
    }
    addRoute(n: number, m: number){
        if (!this.graph.has(n)) 
            this.addNode(n)
        this.graph.get(n).push(m)
    }

    addRouteArr(arr: route[]){
        arr.forEach(element => this.addRoute(element[0], element[1]))
    }
    addNodeArr(arr: number[]){
        arr.forEach( element => this.addNode(element))
    }
    bfs(src: number, destination: number){
        if ( !this.graph.has( src) || !this.graph.has(destination)) return false 
        let q = new Queue<number>()
        let visited = new Set<number>()
        visited.add(src)
        q.enqueue(src)

        while( !q.isEmpty() ){
            
                // newnode
                let nn = q.dequeue()
                let nextnodes = this.graph.get(nn)

                for( let nextnode of nextnodes){
                    if( !visited.has(nextnode)){
                        visited.add(nextnode)
                        q.enqueue(nextnode)
                        if( nextnode == destination) return true
                    }
                }
        }
        return false
    }
    isRoute(n:number, m: number): boolean{
       
        return this.bfs(n, m) || this.bfs(m, n)
    }
    isundirectedRoute(n: number , m: number): boolean{
        // bidirectional search for undirected graph
        if ( !this.graph.has( n) || !this.graph.has(m)) return false 
        let qN = new Queue<number>()
        let qM = new Queue<number>()
        let visitedbyN = new Set<number>()
        let visitedbyM = new Set<number>()
        visitedbyN.add(n)
        visitedbyM.add(m)
        qN.enqueue(n)
        qM.enqueue(m)
        while( !qN.isEmpty() || !qM.isEmpty()){
            if (!qN.isEmpty()){
                // newnode
                let nn = qN.dequeue()
                let nextnodes = this.graph.get(nn)
                if(visitedbyM.has(nn)){
                    return  
                }
                for( let nextnode of nextnodes){
                    if( !visitedbyN.has(nextnode)){
                        visitedbyN.add(nextnode)
                        qN.enqueue(nextnode)
                    }
                }
                
            }
            if (!qM.isEmpty()){
                // newnode
                let nn = qM.dequeue()
                let nextnodes = this.graph.get(nn)
                if(visitedbyN.has(nn)){
                    return true
                }
                for( let nextnode of nextnodes){
                    if( !visitedbyM.has(nextnode)){
                        visitedbyM.add(nextnode)
                        qM.enqueue(nextnode)
                    }
                }
                
            }
            
        }
        return false
    }
} 
let g = new graph()
g.addNodeArr(nodes)
g.addRouteArr(routes)
console.log(g.graph)
console.log('route between 3, 7', g.isRoute(3, 7))
console.log('route between 1, 8', g.isRoute(1, 8))
console.log('route between 7, 8', g.isRoute(7, 8))
console.log('route between 8, 7', g.isRoute(8, 7))
