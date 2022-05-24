/**
 * @param {number[]} cost
 * @return {number}
 */


let minCostClimbingStairs = (cost) => {
    let cache = {};
    let climb = (i) => {
        if (i === cost.length) {
            return 0;
        }

        if (i === cost.length - 1) {
            return cost[i];
        }

        if (cache.hasOwnProperty(i)) {
            return cache[i] + (cost[i] || 0);
        }
        cache[i] =  Math.min(climb(i + 1), climb(i + 2));

        return (cost[i] || 0) + cache[i];
    };

    return climb(-1);
};


function runTest() {
    // console.log(climbStairs(3));
    // console.log(minCostClimbingStairs([10,15,20]));
    console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
    // console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
}

runTest();





// let minCostClimbingStairs = (cost) => {
//
//     let climb = (i) => {
//         if (i === cost.length) {
//             return 0;
//         }
//
//         if (i === cost.length - 1) {
//             return cost[i];
//         }
//         return (cost[i] || 0) + Math.min(climb(i + 1), climb(i + 2));
//     };
//
//     return climb(-1);
// };
