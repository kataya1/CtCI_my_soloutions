// hastable ( arr, key rosoloution to but element at a specific place inside that array)
// node ( data, next)

class node<K, V>{
    private _key: K;
    private _val: V;
    private _next: node<K, V> | null;
    constructor(k: K, v: V){
        this._key = k
        this._val = v
        this._next = null
    }
    get key(){
        return this._key
    }
    set key(k: K){
        this._key = k
    }
    get value(){
        return this._val
    }

    set value(d: V){
        this._val = d
    }

    get next(): node<K, V> | null{
        return this._next
    }

    set next(n: node<K, V>| null){
        this._next = n
    }
}
let unsupportedKeyTyep = () => {throw new Error("key type unsupported")};

class HashTable< K, V > {
    private size: number;
    arr: node<K, V>[]

    constructor(s: number = 2000){
        this.size = s
        this.arr = Array(this.size).fill(null)
    }
    Resolve(key: K): number{
        let s = this.size
        if( typeof key === "number")
            // handes negative numbers 
            return ((key % s) + s) % s
        else if( typeof key === "string"){
            let arr = Array.from(key)
            let num = arr.reduce((acc, l) =>  acc + l.charCodeAt(0) , 0)
            return num % s
        }
        else
            unsupportedKeyTyep()
        return 0
            
    }
    get(key: K): V{
        let loc = this.Resolve(key)
        let n = this.arr[loc]
        if( n === null) return undefined
        else{
            while(n.key !== key){
                if (n.next == null) break
                n = n.next
            }
            return ( n.key === key) ? n.value : undefined
        }
    }
    set(key: K, val: V){

        let loc = this.Resolve(key)
        let n = this.arr[loc]
        if( n === null)
            this.arr[loc] = new node(key, val)
        else{
            //  O( n) insertion 
            while(n.next !== null && n.key !== key)
                n = n.next
            n.key === key ? n.value = val :  n.next = new node(key, val) 
        }
        
    }
}
// now i know why i felt bad while coding this - the hashtable is an array of linkedlist
// should have a linked list class that handles insertion, read, update, delete instead of this 

let ht = new HashTable(26)
ht.set('a', 12)
ht.set('a', 23)
ht.set('bsr', "str")
ht.set('c', 3)
ht.set('b', 2)
ht.set(19, 2)
ht.set(46, 'ni')
ht.set(20, 2)
console.log(ht.arr)