/**
 * @param {string[]} operations
 * @return {number}
 */
let maxSubArray = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    let largestSum = nums[0];
    let currentSum = 0;
    for (let k = 0; k < nums.length; k++) {
        currentSum = Math.max(currentSum + nums[k], nums[k]);
        largestSum = Math.max(currentSum, largestSum);
    }
    return largestSum;
};


runTest = () => {
    // console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
    console.log(maxSubArray([1]));
};

runTest();
