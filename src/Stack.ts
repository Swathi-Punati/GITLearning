/**
 * 
 */
export class Stack<T>{

    private _items: T[] = [];

    constructor(initialData: Array<T> = []){

        this._items.push(...initialData);
    }

    pop():T{
        return this._items.pop();
    }

    size():number{
        return this._items.length;

    }

    isEmpty():boolean{
        return this._items.length === 0;
    }
 
}