/**
 * @param arr
 * @return {number} The number of consecutive ones
 */
let countConsecutive = (arr) => {
    let currentConsecutive = 0;
    let maxConsecutive = 0;

    arr.forEach((x) => {
        if (x === 1) {
            currentConsecutive++;
        }
        else {
            currentConsecutive = 0;
        }
        maxConsecutive = Math.max(currentConsecutive, maxConsecutive);
    });

    return maxConsecutive;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes_1 = (nums) => {
        let maxConsecutive = countConsecutive(nums);

        nums.forEach((x, i) => {
            if (x === 0) {
                nums[i] = 1;
                maxConsecutive = Math.max(countConsecutive(nums), maxConsecutive);
                nums[i] = 0;
            }

        });

        return maxConsecutive;
    };



/**
 * @param {number[]} nums
 * @return {number}
 */
//I think we can come up with a more optimal solution
let findMaxConsecutiveOnes_1 = (nums) => {
    let maxConsecutive = 0, oneCounter = 0;

    nums.forEach((x, i) => {
        oneCounter++;
        if (x === 0) {
            nums[i] = 1;
            maxConsecutive = Math.max(countConsecutive(nums), maxConsecutive);
            nums[i] = 0;
        }

    });

    return maxConsecutive;
};



function runTest() {
    console.log(findMaxConsecutiveOnes([1,0,1,1,0]));
    console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
    console.log(findMaxConsecutiveOnes([1,1,0,1]));



}

runTest();
