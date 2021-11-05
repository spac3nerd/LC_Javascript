//For this solution, we can start at both ends of the array, and simply calculate the maximum water volume in between each
//  index. Then, we simply carry over the max(currentVolume, maxVolume)

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = (height) => {

    let k = 0, n = height.length - 1, m = 0;

    while (k < n) {

        //we have to compare against the current water held at indices k, n
        m = Math.max(m, (n - k) * Math.min(height[k], height[n]));

        if (height[k] < height[n]) {
            k++;
        }
        else {
            n --;
        }
    }

    return m;
};


function runTest() {
    console.log(maxArea([1,8,6,2,5,4,8,3,7]));
}

runTest();

