//In place algorithm

//Solution 1 - trivial
var removeDuplicates_1 = function(nums) {
    for (let k = 0; k < nums.length - 1; k++) {
        if (nums[k] === nums[k + 1]) {
            nums.splice(k, 1);
            k--;
        }
    }

    return nums.length;
};


//Solution 2 - I wanted to try a different one, but leet code seems to fail on this one for no reason :(

var removeDuplicates = function(nums) {
    nums = nums.reduce((acc, cur, idx) => {
        if (acc[acc.length - 1] !== cur || acc.length === 0)
            acc.push(cur)
        return acc;
    }, []);
    console.log(nums);

    return nums.length;
};



function runTest() {
    console.log(removeDuplicates([1,1,2]));
}

runTest();