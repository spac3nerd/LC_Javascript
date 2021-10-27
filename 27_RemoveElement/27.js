//O(1) space solution is required

//this solution is trivial in JS
let removeElement1 = (nums, val) => {
    let count = nums.length;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === val) {
            nums.splice(k, 1);
            count--;
            k--; //we have to decrement here since we spliced the array into a shorter one
        }
    }
    return count;
};

//let's use the fact that we can simply re-order items and read the first k-elements to our advantage
let removeElement = (nums, val) => {
    let count = nums.length;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === val) {
            nums[k] = nums[count - 1];
            //nums[count - 1] = '';
            count--;
            k--;
        }
    }
    return count;
};

runTest = () => {
    //console.log(removeElement([0,1,2,2,3,0,4,2], 2));
    console.log(removeElement([0,1,2,2,3,0,4,2], 2));
    //console.log(removeElement([3,2,2,3], 3));
};

runTest();
