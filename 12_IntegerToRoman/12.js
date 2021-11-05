
let rS = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M"
];

let rV = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman1 = (num) => {
    let r = "";
    while (num > 0) {
        for (let k = rV.length - 1; k >= 0; k--) {
            if (num - rV[k] >= 0) {
                r += rS[k];
                num -= rV[k];
                k = 0;
            }

        }
    }

    return r;
};


/**
 * Slight optimization - we know the current max for each iteration, thus we can save a few cycles
 * @param {number} num
 * @return {string}
 */
let intToRoman = (num) => {
    let r = "";
    let m = rV.length - 1;
    while (num > 0) {
        for (let k = m; k >= 0; k--) {
            if (num - rV[k] >= 0) {
                r += rS[k];
                num -= rV[k];
                m = k;
                k = 0;
            }
        }
    }

    return r;
};


function runTest() {
    console.log(intToRoman(58));
    console.log(intToRoman(1994));
}

runTest();



