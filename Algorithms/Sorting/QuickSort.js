function quickSort(nums){
    quickSortHelper(nums, 0, nums.length-1); // calling a helper function which in returns become a recursive function.
    return nums;
    
}
function quickSortHelper(nums, left, right){
    if(left < right){ // base condition if the array has 1 or 0 elements which is "sorted in a way" so ignored them to getting sorted again in a loop and get stack overload. 
        let pivotIndex = partition(nums, left, right); //finding pivot index
        //console.log(pivotIndex);
        quickSortHelper(nums, left, pivotIndex-1); //this takes care of left part of pivot.
        quickSortHelper(nums, pivotIndex+1, right); // this takes care of right part of pivot.
    }
}
function partition(nums, low, high){
    let pivot = nums[high]; // setting last element as pivot 
    let i = low-1; // setting i to the before index in order to get proper index later on
    for(let j = low; j<high; j++){ // last element is selected as pivot so j iterates from low to high -1 ;
        // if lowest is selected as pivot then j starts from low+1 to high;
        // if middle one selected as pivot then exchange it with last element and proceed with last element approach.
        if(nums[j] < pivot){
            i++;
            [nums[j],nums[i]] = [nums[i],nums[j]]; //rearranging less than pivot to left in an order of i ofcourse other side of elements reaches right part.
        }            
    }
    [nums[i+1],nums[high]]=[nums[high],nums[i+1]]; // finally pivot reaches its position after segregating the left and right parts of pivot
    return i+1;
}

console.log(quickSort([2,5,1,9,7]));