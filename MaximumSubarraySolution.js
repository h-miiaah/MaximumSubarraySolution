/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let currentSum = -Infinity;
    let maximumSum = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        currentSum = Math.max(0, currentSum);
        currentSum += nums[i];
        maximumSum = Math.max(maximumSum, currentSum);
    }
    return maximumSum;
};


/*

- Set a variable currentSum to -Infinity
- Set a variable maximumSum to -Infinity
- Loop through each variable in the array
- We check if the currentSum is below 0
- If the currentSum is below zero we assign it to be 0

*/