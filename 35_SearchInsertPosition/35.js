var searchInsert = function(nums, target) {
    let k = 0;
    for (k = 0; k <=nums.length; k++) {
        if (target === nums[k]) {
            return k;
        }
        else if (target < nums[k]) {
            return k;
        }
    }
    return k - 1;
};




function runTest() {
    console.log(searchInsert([1,3,5,6], 7));
}

runTest();