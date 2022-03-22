// what does in memory mean? 
// files, folders, 
// folder can have many files or other folders

import { threadId } from "worker_threads";

// file: new file delete, move, copy paste
// folder: new folder, delete folder , move , copy/paste 
abstract class Entry{ 
    // choosing what accessor is completely arbitrary ( or more like syntax trial)
    protected name: string;
    protected parent: Folder;
    private _size: number;
    constructor(n: string, p: Folder ){
        this.name = n
        this.parent = p
        this.parent?.addEntry(this)
    }
    get size(){
        return this._size
    }
    set size(n: number){
        this._size = n
    }
    public copyTo(p: Folder){
        p.addEntry(structuredClone(this))
    }
    
    public move(p: Folder){
        this.parent.deleteEntry(this)
        this.parent = p
        this.parent.addEntry(this)
    }
    public delete(){
        this.parent?.deleteEntry(this)
    }
    public getFullPath(): string{
        if (parent == null) return this.name
        return this.parent.getFullPath() + "/" + this.name
    }
    public rename(n: string): void{
        this.name = n
    }

}

class file extends Entry{
    #data: string;
    type: string;
    
    constructor(n ,p , type, d){
        super(n, p)
        this.type = type

        // this calls the set data which changes the size 
        this.data = d

    }
    public get data(){
        return this.#data
    }
    public set data(d: string){
        this.#data = d
        this.size = this.data.length * 8
    }
}

class Folder extends Entry{
    content: Set<Entry> = new Set();

    deleteEntry(obj: Entry){
        this.content.delete(obj)
        this.size -= obj.size
    }
    addEntry(e: Entry){
        this.content.add(e)
        this.size += e.size
    }
}

