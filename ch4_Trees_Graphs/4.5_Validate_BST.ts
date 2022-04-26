class biNode {
    data: number;
    left: biNode | null = null;
    right: biNode | null = null;
    constructor(d: number){
        this.data = d
    }
}
interface validation {
    min: number;
    max: number;
    valid: boolean;
    invalidNodes: biNode[];
}
export class Tree {
    root: biNode| null = null;
    #validateBST(root: biNode| null): validation {
        if (root == null)
            return {
                min: Number.MAX_SAFE_INTEGER,
                max: Number.MIN_SAFE_INTEGER,
                valid: true,
                invalidNodes: []
            };
        let left = this.#validateBST(root.left);
        let right = this.#validateBST(root.right);
        let r: validation = {
            min: Math.min(left.min, root.data),
            max: Math.max(right.max, root.data),
            valid:
                root.data >= left.max &&
                root.data <= right.min
            ,
            invalidNodes: [...left.invalidNodes , ...right.invalidNodes]
        };
        if(!r.valid) r.invalidNodes.push(root)
        return r;
    }
    validateBST(root: biNode| null){
        return this.#validateBST(root).invalidNodes.length === 0
    }
}
import { makeBST } from "./4.2_Minimal_Tree";

let r1 = <biNode>makeBST([1,2,3,4,5,6,7])
let r3 = <biNode>makeBST([1,2,4,5,6,7])
let r2 = makeBST([1,6 , 2, 4, 3, 5,7]) as biNode 
let t = new Tree()

console.log(t.validateBST(r1))
console.log(t.validateBST(r2))
console.log(t.validateBST(r3))