/**
 * @param {string} s
 * @return {boolean}
 */
//solution 1 - used a switch statement, I think this can be faster
var isValid_s1 = function(s) {

    function verifyPair(a, b) {
        switch (a) {
            case '{':
                if (b === '}')
                    return true
                else
                    return false
                break;
            case '(':
                if (b === ')')
                    return true
                else
                    return false
                break;
            case '[':
                if (b === ']')
                    return true
                else
                    return false
                break;
        }
    }

    let stack = [];
    let k = s.length;
    while (k--) {
        if (stack.length === 0) {
            stack.push(s[k]);
        }
        else {
            if (verifyPair(s[k], stack[stack.length - 1])) {
                stack.pop();
            }
            else {
                stack.push(s[k]);
            }
        }
    }

    if (stack.length === 0)
        return true

    return false;
};


//More optimal solution - uses map to check pairs
var isValid = function(s) {
    //Faster mapping solution
    let pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = [];
    let k = s.length;
    while (k--) {
        if (stack.length === 0) {
            stack.push(s[k]);
        }
        else {
            if (pairs[s[k]] === stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                stack.push(s[k]);
            }
        }
    }

    if (stack.length === 0)
        return true

    return false;
};



function runTest() {
    console.log(isValid("()(())"));
}

runTest();

