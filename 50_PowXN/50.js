/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//Solution 1 - works, but it will exceed call stack space for high
    //values of n
var myPow_1 = function(x, n) {
    if (n < 0) {
        return 1 / myPow(x, Math.abs(n));
    }
    else {
        if (n === 1) {
            return x;
        }
        else {
            return x * myPow(x, n - 1);
        }
    }
};

//Solution 2 - I think we can reduce the recursive calls by halving n in each call
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / myPow(x, Math.abs(n));
    }
    else {
        if (n === 1) {
            return x;
        }
        if (n === 0) {
            return 1;
        }

        //we check to see if n is even, if so, ,make another call. If not, account for one x and then make a call
        return n % 2 === 0 ?  myPow(x * x, n /2) : myPow(x * x, Math.floor(n / 2)) * x;
    }
};




function runTest() {
    console.log(myPow(2,10));
}

runTest();