/**
    Binary Search works only for sorted array.

    time complexity - O(logn)
 */

 function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(arr[middleIndex]===target){
            return middleIndex;
        }else if(arr[middleIndex]>target){
            rightIndex=middleIndex-1;
        }else{
            leftIndex=middleIndex+1;
        }
        //console.log('hi');
    }
    return -1;
 }

 console.log(binarySearch([-4,-2,0,1,5],5));