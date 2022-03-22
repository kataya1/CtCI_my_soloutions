// how many edges does a piece have 4, 6 
// jigsaw, piece, edge( protrusion, hole)

// jigsaw has many pieces 
// piece has 4 edges
// edges can be either protrusion or cavity
// a protrusion has a matching cavity 

// peice can rotate, can combine with piece to make a bigger piece ()
// jigsow ( isSolved(), fitWith(), ) 
enum edgeShape{
    circle,
    square,
    triangle,
    smooth,
}
interface Perimeter{
    top: Edge,
    right: Edge,
    bottom: Edge,
    left: Edge
}
enum edgeType { protrusion, cavity , smooth}
class Edge{
    type: edgeType;
    shape: edgeShape;
    constructor(t: edgeType, es: edgeShape){
        this.type = t
        this.shape = es
        // unnecisary
        if (t == edgeType.smooth) this.shape = edgeShape.smooth
    }
    static fitsWith(e1: Edge, e2: Edge){
        return e1.type !== e2.type && e1.shape === e2.shape
    }
}
class Piece{
    #row: number;
    #coloumn: number;
    edges: Perimeter
    constructor(e: Perimeter){
        this.edges = e
    }
    isCorrectRow(r: number){
        return this.#row === r
    }
    isCorrectColoumn(c: number){
        return this.#coloumn === c
    }
}
class jigsaw{
    unfilledPlaces: number;
    map: Piece[][]
    pieces: Piece[]
    constructor(s: number, pArr: Piece[]){
        if ( s != pArr.length ** (1/2)){
            console.log( 'missing piece')
        }
    }
    solve(){

    }
    isSolved(){
        return this.unfilledPlaces == 0
    }
}