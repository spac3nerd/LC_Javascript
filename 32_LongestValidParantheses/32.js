/**
 * @param {string} s
 * @return {int}
 */


//Solution 1 - create two stacks, one for checking validity, one for the indices of the paired parantheses
    //After constructing the indices, we can simply count the longest continuous segment
    //This will work, but the indices array will have to be sorted to account for out of order matches - I think I can do better
var longestValidParentheses_attempt1 = function(s) {
    //Faster mapping solution
    let pairs = {
        '(': ')'
    };

    let stack = [];
    let longestRunStack = [];
    let k = s.length;
    while (k--) {
        if (stack.length === 0) {
            // stack.push(s[k]);
            stack.push([k, s[k]]);
        }
        else {
            if (pairs[s[k]] === stack[stack.length - 1][1]) {
                longestRunStack.push(stack.pop()[0]);
                longestRunStack.push(k);
            }
            else {
                stack.push([k, s[k]]);
            }
        }
    }
    //TODO: longestRunStack will have to be sorted

    if (longestRunStack.length === 0)
        return 0;
    if (longestRunStack.length === 1)
        return 1;

    let longestPair = 0;
    let t = 1;
    let n = longestRunStack.length;

    while (n--) {
        if (longestRunStack[n] + 1 !== longestRunStack[n - 1]) {
            longestPair = t;
            t = 0;
        }
        else {
            t++;
        }
    }
    return longestPair;
};

//Attempt 2 - we know that leftovers from the stack have no matches, since we save the index, maybe we can find the
//substrings from each tagged index
var longestValidParentheses = function(s) {
    //Faster mapping solution
    let pairs = {
        '(': ')'
    };

    let stack = [];
    let k = s.length;
    let l = k;
    while (k--) {
        if (stack.length === 0) {
            stack.push([k, s[k]]);
        }
        else {
            if (pairs[s[k]] === stack[stack.length - 1][1]) {
                stack.pop();
            }
            else {
                stack.push([k, s[k]]);
            }
        }
    }

    //if there are no leftovers, then we know everything had a pair
    if (stack.length === 0) {
        return l;
    }
    //we know it will be split in two
    if (stack.length === 1) {
        let str = s.substring(0, stack[0][0]);
        let str2 = s.substring(stack[0][0] + 1, l);

        return str.length > str2.length ? str.length: str2.length;
    }

    let longestSubstring = 0;
    let n = stack.length;
    while (n--) {
        //on the first check, go from 0 to first index
        let i = stack[n][0];
        if (n === stack.length - 1) {
            let str = s.substring(0, i);
            if (str.length > longestSubstring) {
                longestSubstring = str.length;
            }
        }

        if (stack[n - 1] !== undefined) {

            let str = s.substring(i + 1, stack[n - 1][0]);
            if (str.length > longestSubstring) {
                longestSubstring = str.length;
            }
        }
        else {
            let str = s.substring(stack[n+1][0] + 1, i);
            let str2 = s.substring(i + 1, l);
            if ((str.length >= str2.length) && str.length > longestSubstring) {
                longestSubstring = str.length;
            }
            else if (str2.length > longestSubstring) {
                longestSubstring = str2.length;
            }
        }
    }

    return longestSubstring;
};


function runTest() {
    console.log(longestValidParentheses("(()))())("));
}

runTest();

