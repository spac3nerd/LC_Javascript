
//Must be O(log n) solution - should work since nums is sorted
//We can simply split the list in two elements and search the sub lists - the only thing is that we
//  must search the left and right parts if we find hte middle element since there can be adjacent numbers
//  of the same value around the target.
let searchRange = (nums, target) => {
    let first = nums.length;
    let last = -1;

    let splitSearch = (start, end) => {

        let mid = Math.floor(((end + 1) + start) / 2);

        if (nums[mid] === target) {
            first = Math.min(mid, first);
            last = Math.max(mid, last);
            if (start !== end) {
                splitSearch(start, mid - 1);
                splitSearch(mid, end);
            }
        }

        if (start === end) return;

        //search first half
        if (nums[mid] > target) {
            splitSearch(start, mid - 1);
        }

        //search last half
        else {
            splitSearch(mid, end);
        }

    };

    if (nums.length > 0) {
        if (nums.length === 1 && nums[0] === target) {
            first = 0;
            last = 0;
        }
        else {
            splitSearch(0, nums.length - 1);
        }
    }

    if (first === nums.length)
        first = -1;
    return [first, last];
};

function runTest() {
   console.log(searchRange([5,7,7,8,8,10], 8));
   console.log(searchRange([], 0));
   console.log(searchRange([1], 1));
   console.log(searchRange([2,2], 2));
   console.log(searchRange([5,7,7,8,8,10], 6));
}

runTest();
