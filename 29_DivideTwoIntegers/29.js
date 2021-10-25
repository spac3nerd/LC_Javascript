
//quick exclusive or implementation
let xor = (a, b) => {
    return (a < 0 || b < 0) && !(a < 0 && b < 0);
};

let divide = (dividend, divisor) => {
    let res = 0;
    let absDiv = Math.abs(dividend);
    while (absDiv >= 0) {
        absDiv -= Math.abs(divisor);
        res += 1;
    }

    //return (divisor < 0 || dividend < 0) ? (-res + 1) : res - 1;
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
