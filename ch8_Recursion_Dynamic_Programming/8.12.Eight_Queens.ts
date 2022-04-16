
class Queenboard{
    // actually for this specific case it might be worth it to be more specific 
    // instead of cells beeing a two dimensional array of string ( " ", "Q") 
    // it can be an array of single digit integers,
    // where the index represent the row and the number represent the column
    cells: number[]
    len: number
    diffWays: number[][] = []
    constructor(n: number){
        this.cells = Array(n).fill(null)
        this.len = n

    }
    numOfQueensConfiguration(){
        return this.ways( this.len , 99)
    }
    ways(row: number, col: number , cells = this.cells): number{   

            if ( this.canPlace(row,col,cells)){
                cells[row] = col
                if (row == 0){
                    this.diffWays.push(this.cells.slice(0, this.len))
                    return 1 
                }

                let sum = 0
                for( let i = 0; i < this.len; i++ ){
                    sum += this.ways(row - 1, i, cells)
                }
                return sum
            }
            return 0    
        

        
    }
    canPlace(row: number, col: number, cells: number[]): boolean{
        for( let i = row + 1; i < this.len; i++ ){ 

            if ( ( i - row == (Math.abs(cells[i] - col ))) || cells[i] == col )
                return false
        }
        return true
    }
}

let q1 = new Queenboard(8)
console.log(q1.numOfQueensConfiguration())
console.log(q1.diffWays)


// --Q-----\n
// Q-------\n
// ---Q----\n 