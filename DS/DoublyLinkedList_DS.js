class Node{
    constructor(value){
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let temp = this.head;
            let listStr = "";
            while(temp){
                listStr += (temp.next === null)? `${temp.value}` : `${temp.value} <-> `;
                temp = temp.next;
            }
            console.log(listStr);
        }        
    }

    printReverse(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let temp = this.tail;
            let listStr = "";
            while(temp){
                listStr += (temp.prev === null)? `${temp.value}` : `${temp.value} <-> `;
                temp = temp.prev;
            }
            console.log(listStr);
        }
    }

    prepend(value){
        const newNode = new Node(value);

        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value){
        const newNode = new Node(value);

        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }else{
            const value = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return value;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }else{
            const value = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return value;
        }
    }

}


const list = new DoublyLinkedList();

list.prepend(10);
list.append(7);
list.append(11);
list.prepend(12);
list.print();
list.printReverse();
list.removeFromFront();
list.removeFromEnd();
list.print();

    