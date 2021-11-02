/**
 * @param {string} s
 * @return {number}
 */
    //First try, with about 30 seconds of thinking about the problem, trivial O(N) solution
let firstUniqChar1 = (s) => {
    let map = {};
    let stack = [];
    let firstUnique = -1;
    for (let k = s.length - 1; k >= 0; k--) {
        if (map.hasOwnProperty(s[k])) {
            map[s[k]] += 1;
        }
        else {
            map[s[k]] = 1;
        }
        stack.push(s[k]);
    }

    let i = 0;
    while (firstUnique === -1 && stack.length > 0) {
        if (map[stack[stack.length - 1]] === 1) {
            firstUnique = i;
        }
        else {
            stack.pop();
        }
        i++;
    }
        return firstUnique;
};

//I think we can make this simpler by removing the stack altogether
let firstUniqChar = (s) => {
    let map = {};
    let k;
    for (k = s.length - 1; k >= 0; k--) {
        if (map.hasOwnProperty(s[k])) {
            map[s[k]] += 1;
        }
        else {
            map[s[k]] = 1;
        }
    }

    for (k = 0; k < s.length; k++) {
        if (map.hasOwnProperty(s[k]) && map[s[k]] === 1) {
            return k;
        }
    }

    return -1;
};




function runTest() {
    console.log(firstUniqChar("leetcode"));
    console.log(firstUniqChar("loveleetcode"));
    console.log(firstUniqChar("aabb"));
}

runTest();
