/*
Time complexity - O(n)
*/ 

function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1);
}
function search(arr,target,leftIndex,rightIndex){
    // console.log('HI');
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex=Math.floor(( leftIndex+rightIndex )/2);
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target>arr[middleIndex]){
        return search(arr,target,middleIndex+1,rightIndex);
    }else{
        return search(arr,target,leftIndex,middleIndex-1);
    }
}

console.log(recursiveBinarySearch([1,2,3,4,5,6],4));

