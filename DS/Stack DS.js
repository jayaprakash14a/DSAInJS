/*
1) Stack data strucuter is sequential collection of elements that follow the principle
of Last in First Out (LIFO)
2) Last element which is places is the first one which is going to be removed.
3) Stack is an abstract data type. It is defined by behaviour.
4) Push -- Adds element
5) Pop -- Removes element
*/

class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }

}

const stack=new Stack();
console.log(stack.isEmpty());


