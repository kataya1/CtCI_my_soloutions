// how big is the board we can design n x n

// piece, board, tile,  user( turn), gameController, EventListener, renderController
// a board is n x n tiles 
// a tile has one piece 
// a board has two users 

// piece: color, flip() 
// user: play()
// tile; isEmpty()
// board: canPlace()
enum PieceColor {
    black,
}
class User{
    name: string;
    color: PieceColor;
    
    play(){
        // places a piece on the tile
    }
}

class Piece{
    color: PieceColor;
    constructor(clr: PieceColor){
        this.color = clr
    }
    flip(usrClr){
        this.color = usrClr
    }
}

class Tile{
    isEmpty: boolean;
    piece: Piece;
    constructor(p: Piece = null){
        this.piece = p
        if(this.piece === null) this.isEmpty = true
    }
    fill(p: Piece){
        this.piece = p
        this.isEmpty = false
    }
}