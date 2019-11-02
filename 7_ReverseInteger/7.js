/*
There is an easy way to do this in JS by converting to a String/Array
But it's more fun to do it the right way
 */

var reverse = function(x) {
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

    return result;
};




function runTest() {
    console.log(reverse(-123));
}

runTest();