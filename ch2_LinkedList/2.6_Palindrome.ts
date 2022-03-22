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
    // O(n) time ,  O(n) space
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

function reversLL(node: LLNode< any>){
    let prev = null
   
    while(node != null){
        let temp = node.next
        node.next = prev
        prev = node 
        node = temp
    }
    return prev
}

function isPalindrome2(n){
    // o(n) time  , O(1) space
    let slow = n, fast = n
    while( fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let end = reversLL(slow)
    
    while( end && n){
        if( end.data !== n.data) return false
        end = end.next
        n = n.next
    }
    return true 
}