/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

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



function runTest() {
    console.log(isValid("()[]{}"));
}

runTest();

