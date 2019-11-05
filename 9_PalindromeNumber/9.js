/**
 * @param {number} x
 * @return {boolean}
 */

//This should be trivial given that I already solved the reversal problem
    //With the added bonus of doing it all as an integer

var isPalindrome = function(x) {

    //given that we care about the negative sign
    if (x < 0)
        return false

    //***Reversal code

    //we will get the order of magnitude
    let mag = 0;
    let stack = [];
    let y = x;
    while (y !== 0) {
        mag++;
        stack.push(y % 10);
        y = Math.trunc(y / 10);
    }
    let result = 0;
    let k = 0;
    while (k < stack.length) {
        result = result + (Math.pow(10, mag - 1) * stack[k]);
        mag--;
        k++;
    }
    //This is a pointless check
    if (result > (Math.pow(2, 31) - 1) || result < -Math.pow(2, 31)) {
        result = 0;
    }

    return x - result === 0;
};




function runTest() {
    console.log(isPalindrome(212));
}

runTest();