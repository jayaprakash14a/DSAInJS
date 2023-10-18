/*

1)A map is an ordered collection of key value pairs.
2)Maps are iterable.
3)keys and values can be of any type

*/ 

const map=new Map([['a',1],['b',2]]);
map.set('c',3); //to add new key value pair.
console.log(map.get('c')); // to retrieve value based on element.
console.log(map.has('a'));  // to check whether particular key exist in it or not.
//map.delete('c'); //to delete particular key value pair.
console.log(map.size); //to find the size.
//map.clear(); // to clear the whole map.

for (const [key,value] of map){
    console.log(`${key}: ${value}`);
}