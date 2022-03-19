import { LinkedList, LLNode } from "./scriple";

let ll = new LinkedList()
ll.enqueu('a')
ll.enqueu('b')
ll.enqueu('c')
ll.enqueu('b')
ll.enqueu('a')

console.log(ll.printChain())

let notPali = new LinkedList()
notPali.enqueu('a').enqueu('b').enqueu('c').enqueu('d')
let pali = new LinkedList()
pali.enqueu('a').enqueu('b').enqueu('b').enqueu('a')
console.log(notPali.printChain())

function isPalindrome(n: LLNode<any> | null): boolean{
    let p: typeof n = n
    let s = new LinkedList()
    let c = 0
    while( p!= null){
        s.push(p.data)
        c++
        p = p.next
    }
    c = Math.floor(c / 2)
    
    while(c){
        if ( s.pop() !=  n!.data) return false
        n = n!.next 
        c--
    }
    return true
}
console.log(isPalindrome(ll.head))  // true
console.log(isPalindrome(notPali.head))  // false
console.log(isPalindrome(pali.head))  // true
