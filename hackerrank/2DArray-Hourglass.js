function hourglassSum(arr) {
    // Write your code here
    let masks = [
        [0,0],
        [0,1],
        [0,2],
        [1,1],
        [2,0],
        [2,1],
        [2,2],
    ];
    let sum = 0;
    let maxSum = 0;
    for (let k = 0; k < 4; k++) {
        for (let n = 0; n < 4; n++) {
            for (let a = 0; a < masks.length; a++) {
                sum += arr[k + masks[a][0]][n + masks[a][1]];
            }
            maxSum = Math.max(sum, maxSum);
            sum = 0;
        }
    }

    return maxSum;
}



function runTest() {


    console.log(hourglassSum([[1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]]));
}

runTest();
