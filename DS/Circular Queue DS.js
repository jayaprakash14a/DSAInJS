/*
1) The size of this queue is fixed and single block memory is used as first element is connected to last element
2) It follows First In First Out(FIFO)
3) It is also called as circular buffer or ring buffer
4) We cannot enqueue further if queue is full until a dequeue operation occurs.
5) if size is fixed , the circular queue is good choice
6) Enqueue - Adds an element to tail/rear of the collection
7) Dequeue - Removes an element from front of the collection
ex : Clock, traffic signal, Streaming video with buffer
*/

class CircularQueue{
    constructor(capacity){
        this.items=new Array(capacity);
        this.capacity=capacity;
        this.currentLength=0;
        this.front=-1;
        this.rear=-1;
    }
    isFull(){
        return this.currentLength===this.capacity;
    }
    isEmpty(){
        return this.currentLength===0
    }
    Enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1) % this.capacity;
            this.items[this.rear]=element;
            this.currentLength++;
            if(this.front===-1){
                this.front=this.rear;
            }
        }
    }
    Dequeue(){
        if(!this.isEmpty()){
            const item=this.items[this.front];
            this.items[this.front]=null;
            this.front=this.front+1;
            this.currentLength--;
            if(this.isEmpty()){
                this.front=-1;
                this.rear=-1;
            }
            return item;
        }
        return null;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }
    print(){
        if(!this.isEmpty()){
            let str='';
            let i;
            for(i=this.front;i<=this.rear;i=(i+1)){
                str+=this.items[i]+' ';
            }
            console.log(str);
        }else{
            console.log("Queue is empty");
        }
    }

}
const circularQueue= new CircularQueue(5);
console.log(circularQueue.isEmpty());
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Dequeue();
circularQueue.Dequeue();
circularQueue.Dequeue();
circularQueue.Dequeue();
circularQueue.Dequeue();
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.Enqueue(1);
circularQueue.print();