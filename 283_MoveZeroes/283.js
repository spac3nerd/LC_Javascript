var moveZeroes = function(nums) {
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === 0) {
            let n = k;
            while (nums[n] !== 0) {
                nums[k] = nums[n];
                nums[n] = 0;
                n++;
            }
        }
    }
};




function runTest() {
    let nums = [0,1,0,3, 12];
    console.log(nums);
}

runTest();