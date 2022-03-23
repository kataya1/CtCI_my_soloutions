class Stack extends Array{

    peek(){
        return this.at(this.length - 1)
    }
    isEmpty(): boolean{
        return this.length === 0
    
    }
    
}

class soloution{

    public static sortStack(s: Stack){
        'sort a stack using nothing but an additional stack'
        if( !s  || s.length < 2 ) return s
        let s2 = new Stack()
        let sorted = false
        while( !sorted){
            let temp = s.pop()
            while( !s.isEmpty()){
                if (temp < s.peek()){
                    s2.push(temp)
                    temp = s.pop()
                }
                else
                    s2.push(s.pop())
            }
            s2.push(temp)

            let sortcounter = 0
            temp = s2.pop()
            while (!s2.isEmpty()){
                if (temp >= s2.peek()){
                    s.push(temp)
                    temp = s2.pop()
                    sortcounter += 1
                }
                else
                    s.push(s2.pop())
            }
            s.push(temp)
            if (sortcounter === s.length - 1)
                sorted = true
          

        }

    }
}
let s = new Stack()
s.push(8, 3 , 4 , 2, 1, 5, 7 , 6, 5)
console.log(s)
soloution.sortStack(s)
console.log(s)
console.log(s.pop())
console.log(s.pop())