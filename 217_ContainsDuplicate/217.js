/**
 * @param {string[]} operations
 * @return {number}
 * Quick 2 minute solution
 */
let containsDuplicate1 = (nums) => {
    let occurrenceMap = {};
    let res = false;
    nums.forEach((item, index) => {
        if (occurrenceMap.hasOwnProperty((item))) {
            res = true;
        }
        else {
            occurrenceMap[item] = null;
        }
    });

    return res;
};

//We can perhaps shave a bit of memory off
let containsDuplicate = (nums) => {
    let occurrenceMap = {};
    for (let k = 0; k < nums.length; k++) {
        if (occurrenceMap.hasOwnProperty((nums[k]))) {
            return true;
        }
        else {
            occurrenceMap[nums[k]] = null;
        }
    }
    return false;

};


runTest = () => {
    console.log(containsDuplicate([1,2,3,1]));
    console.log(containsDuplicate([1,2,3,4]));
};

runTest();
