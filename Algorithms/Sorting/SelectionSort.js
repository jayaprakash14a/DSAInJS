class Solution {
    selectionSort(nums) {

        //iterating over length-1 elements to have base value to compare
        for(let i=0; i<nums.length-1; i++){
            let minIndex=i;

            //iterating from i+1 index to end index to find the min value and index
            for(let j=i+1; j<nums.length; j++){
                if(nums[j] < nums[minIndex]){
                    minIndex=j;
                } 
            }
            
            //swaping values if min index isnt same as i
            if(minIndex!=i){
                [nums[minIndex] , nums[i]] = [nums[i] , nums[minIndex]];
            }
        }

        return nums;
    }
}

const solution = new Solution();
console.log(solution.selectionSort([64, 25, 12, 22, 11]));