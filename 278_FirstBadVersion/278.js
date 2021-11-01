
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//Similar to prob 34, we can try an O(log n) solution
let solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let firstBad = n;
        let splitSearch = (start, end) => {

            let mid = Math.floor(((end + 1) + start) / 2);

            if (start === end) return;

            if (isBadVersion(mid)) {
                firstBad = Math.min(mid, firstBad);
                if (start !== end) {
                    splitSearch(start, mid - 1);

                }
            }
            else {
                splitSearch(mid, end);
            }

        };


        splitSearch(0, n);

        return firstBad;
    };
};

isBadVersion = (k) => {
    // let firstBad = 3;
    let firstBad = 1;
    return k >= firstBad;
};

//can't really test it well since "isBadVersion" is implemented elsewhere, but we can bootstrap a dummy function definition
function runTest() {
    let func = solution(isBadVersion);
    console.log(func(5));
    console.log(func(1));
}

runTest();
