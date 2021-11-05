let map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s) => {
    let m = [];
    for (let k = 0; k < s.length; k++) {

        if (s[k] === "I") {
            if (s[k + 1] && (s[k + 1] === "V" || s[k + 1] === "X")) {
                m.push(-1 * map[s[k]]);
                continue;
            }
        }

        else if (s[k] === "X") {
            if (s[k + 1] && (s[k + 1] === "L" || s[k + 1] === "C")) {
                m.push(-1 * map[s[k]]);
                continue;
            }
        }

        else if (s[k] === "C") {
            if (s[k + 1] && (s[k + 1] === "D" || s[k + 1] === "M")) {
                m.push(-1 * map[s[k]]);
                continue;
            }
        }

        m.push(map[s[k]]);
    }

    return m.reduce((acc, x) => {
        return acc + x;
    }, 0);
};



function runTest() {
    //console.log(romanToInt("III"));
    // console.log(romanToInt("IV"));
    // console.log(romanToInt("IX"));
    console.log(romanToInt("LVIII"));
    console.log(romanToInt("MCMXCIV"));
}

runTest();



