class HashTable{

    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let hashValue = 0;
        for(let i=0; i<key.length; i++){
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key, value){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }

        for(let pair of this.table[index] ){
            if(pair[0] !== value){
                pair[1] = value
                return;
            }

        }

        this.table[index].push([key,value]);
    }

    get(key){
        const index = this.hash(key);

        if(!this.table[index]){
            return undefined;
        }

        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1];
            }
        }

        return undefined;
    }

    remove(key){
        const index = this.hash(key);

        if(!this.table[index]){
            return;
        }

        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair = undefined;
                return
            }
        }
    }

    print(){
        console.log(this.table);
        // for(let i=0;i< this.size; i++){
        //     if(this.table[i]){
        //         console.log(this.table[i]);
        //     }
        // }
    }
}

const hashtable = new HashTable(10);

hashtable.set("jaya","he is ready with typescript");
hashtable.set("prakash","he is about to launch into system design");
console.log(hashtable.get("prakash"));
hashtable.set("aenugutala", "this is to test remove functionality");
hashtable.print();
hashtable.remove("aenugutala");
hashtable.print();