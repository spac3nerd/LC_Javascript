/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let k = 0; k < nums.length; k++) {
        for (let n = 0; n < k; n++) {
            if ((nums[n] + nums[k] === target) && k !== n){
                return [k, n];
            }
        }
    }
};
