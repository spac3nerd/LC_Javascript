//This problem is quite easy, and a recursive solution makes it trivial.

let checkSecondLeastSig = (digits, index) => {
    //if index < 0, then we know that we must pre-pend another element as the most significant integer
    if (index < 0) {
        //digits = prepend(1, digits);
        //return;
        digits.unshift(1);
        return;
    }
    let secondLeastSig = digits[index];

    //if the next digit is 9, then we must again check to see if we need to increment/shift
    if (secondLeastSig === 9) {
        digits[index] = 0;
        checkSecondLeastSig(digits, index - 1);
    }
    //otherwise, simply increment
    else {
        digits[index] = digits[index] + 1;
    }
};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = (digits) => {
    let leastSig = digits[digits.length - 1];
    if (leastSig <= 8) {
        digits[digits.length - 1] = leastSig + 1;

    }
    else {
        if (digits.length === 1) {
            return [1, 0];
        }
        else {
            checkSecondLeastSig(digits, digits.length - 1);
            return digits;
        }
    }
    return digits;
};

runTest = () => {
    //console.log(plusOne([1,2,3]));
    //console.log(plusOne([4,3,9,9]));
    console.log(plusOne([9, 9]));
};

runTest();
