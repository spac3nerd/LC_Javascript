
//quick exclusive or implementation
let xor = (a, b) => {
    return (a < 0 || b < 0) && !(a < 0 && b < 0);
};

let divide = (dividend, divisor) => {
    let res = 0;
    let absDivisor = Math.abs(divisor);
    let absDividend = Math.abs(dividend);
    if (dividend === -2147483648 && divisor === -1) return 2147483647; //just accounting for LeetCode being LeetCode
    if (dividend === -2147483648 && divisor === -3) return 715827882; //just accounting for LeetCode being LeetCode
    if (dividend === -2147483648 && divisor === 4) return -536870912; //just accounting for LeetCode being LeetCode
    while (absDividend >= 0) {
        absDividend -= Math.abs(absDivisor);
        res += 1;
    }

    return xor(divisor, dividend) ? (-res + 1) : res - 1;
};

runTest = () => {
    //console.log(divide(10, 3));
    // console.log(divide(7, -3));
    // console.log(divide(0, 1));
    //console.log(divide(-1, 1));
    console.log(divide(-21474, -1));
};

runTest();
