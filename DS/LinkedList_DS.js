/**
1) A linked list is a linear data structure that includes a series of connected nodes
2) Each node contains data value and pointer value that points to next node.
3) The list elements can be  easily inserted or removed without reallocation or reorganization of entire structure.
4) Items are not stored contiguously
5) Accessing an element make linear time complexity
6) Ex: Image viewer
*/

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }

    print(){
        if(!this.isEmpty()){
            let curr=this.head;
            let listValues='';
            while (curr){
                listValues+= `${curr.value} `;
                curr=curr.next;
            }
            console.log(listValues);
        }else{
            console.log("List is empty");
        }
    }

    //O(1)
    prepend(value){
        const node=new Node(value); //creating new node to prepend it to linked list
        if(!this.isEmpty()){
            node.next=this.head;   //next pointer of new node set to present head
        }
        this.head=node;   //present head set to new node 
        this.size++;

    }
    
    //O(n)
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }
    
}
const list=new LinkedList();
console.log(list.getSize());
list.prepend(10);
list.prepend(20);
list.append(30);
list.print();