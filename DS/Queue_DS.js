/*
 1) The Queue data structure is a sequential collection of elements that follows the principle
 of First In First Out (FIFO)
2) Queue of people where people enter the queue at one end and leave queue at 
other end.
3) Queue is an abstract data type and it is defined by its behaviour.
4) Enqueue - adds an element to tail of collection
5) Dequeue - removes an element from front of the collection.
*/

//Queue as a list
class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift(); //removes first element.
    }
    isEmpty(){
        return this.items.length===0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }

}

const queue= new Queue();
console.log(queue.isEmpty());


//Queue as an object
class QueueinObject{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }
    enqueue(element){
        this.items[this.rear]=element;
        this.rear++;
    }
    dequeue(){
        let item=this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return (this.rear-this.front) === 0; 
    }
    peek(){
        return this.items(this.front);
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        console.log(this.items.toString());
    }

}

const queuee= new QueueinObject();
console.log(queuee.isEmpty());
