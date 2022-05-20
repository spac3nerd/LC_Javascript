/**
 * @param {string[]} tokens
 * @return {number}
 */

let cache = {};
let climbStairs = (n) => {

    if (cache.hasOwnProperty(n)) {
        return cache[n];
    }

    let p = 0;
    if (n === 0) {
        return 1;
    }
    else {
        if (n >= 2) {
            p += climbStairs(n - 2);
        }
        p += climbStairs(n - 1);
    }
    cache[n] = p;
    return p;
};


function runTest() {
    // console.log(climbStairs(3));
    console.log(climbStairs(44));
}

runTest();
