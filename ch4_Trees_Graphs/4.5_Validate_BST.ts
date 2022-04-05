class biNode {
    data: number;
    left: biNode | null = null;
    right: biNode | null = null;
}
interface validation {
    min?: number;
    max?: number;
    valid: boolean;
    invalidNodes?: biNode[];
}
class Tree {
    root: biNode;
    #validateBST(root: biNode): validation {
        if (root == null)
            return {
                min: Number.MAX_SAFE_INTEGER,
                max: Number.MIN_SAFE_INTEGER,
                valid: true,
            };
        let left = this.#validateBST(root.left);
        let right = this.#validateBST(root.right);
        let r: validation = {
            min: Math.min(left.min, root.data),
            max: Math.max(right.max, root.data),
            valid:
                root.data >= left.max &&
                root.data <= right.min &&
                left.valid &&
                right.valid,
        };
        return r;
    }
    validateBST(root: biNode){
        return this.#validateBST(root).valid
    }
}
