
var search1 = function(nums, target) {
    let foundIndex = -1;
    let mid = Math.floor((nums.length - 1) / 2);
    let bounds = [0, nums.length - 1];

    while (foundIndex === -1) {
        if (target === nums[mid]) {
            foundIndex = mid;
        }

        else if (target > nums[mid]) {
            if (mid <= bounds[0]) {
                return -1;
            }
            bounds[0] = mid;
            mid = Math.floor((bounds[1] + mid) / 2);

        }

        else if (target < nums[mid]) {
            if (mid >= bounds[1]) {
                return -1;
            }
            bounds[1] = mid;
            mid = Math.floor(mid / 2);

        }
    }

    return foundIndex;
};


var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let mid = Math.floor((l + r) / 2);

    while (l <= r) {
        if (target === nums[mid]) {
            return mid
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
        mid = Math.floor((l + r) / 2);
    }

    return -1;
};


let test1 = () => {
    // console.log(search([-1,0,3,5,9,12], 9));
    // console.log(search([-1,0,3,5,9,12], 2));
    // console.log(search([-1,0,5], 5));
    // console.log(search([2,5], 2));
    // console.log(search([2,5], 5));
    console.log(search([5], 3));

};

function runTest() {
    test1();
}

runTest();


//&& (mid < bounds[0] || mid > bounds[1])
