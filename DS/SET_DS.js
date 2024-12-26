/*
 1) SET is a data structure which can hold collection of values .
 2) The values must be unique.
 3) It can contain mix of data types
 4) They are dynamically sized. 
 5) They dont maintain insertion order
 6) They are iterable.
 7) Searching and deletion an element in set is faster compared to array.
*/
const set = new Set([1,2,3]);
set.add(4); // adds new value to set.
console.log(set.has(4)); //checks whether set contains 4 or not
set.delete(3); // deletes the value from set
console.log(set.size);

for (const item of set){
    console.log(item);
}  // to iterate over set

set.clear(); // to delete all the data in the set.