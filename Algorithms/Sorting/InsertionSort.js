class Solution {
    insertionSort(nums) {
        for(let i=1; i<nums.length; i++){ //iterates all the elements in array
            let j=i;
            while(j>0 && nums[j] < nums[j-1]){ //
                [nums[j],nums[j-1]] = [nums[j-1],nums[j]];
                j--;
            }
        }
        return nums;
    }
}

let solution = new Solution();

let nums = [13, 46, 24, 52, 20, 9];
nums = solution.insertionSort(nums);

console.log("After Using Insertion Sort:", nums);