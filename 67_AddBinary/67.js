//a is assumed to be of atl east length 1
//I really didn't think this one well
let addBinary1 = (a, b) => {
    let ll = a.length > b.length ? a.length : b.length;
    let c = a.length <= b.length ? a : b;
    a = a.length > b.length ? a : b;
    b = c === a ? b : c;
    let carry = 0, i = 0;
    let t = 0;
    let r = [];


    while (ll > 0 || carry !== 0) {
        if (ll > 0) {
            t = (Number(a[a.length - 1 - i]) + Number(b[b.length - 1 - i] ? b[b.length - 1 - i] : 0)) + carry;
        }
        else {
            t = carry;
        }
        carry = t >= 1 ? t - 1 : 0;
        // t = t > 1 ? 0 : t;
        t = t > 1 ? carry === 2 ? 1 : 0 : t;
        carry--;
        r.push(t);
        ll--;
        i++;
    }

    return r.reverse().join("");
};



let addBinary = (a, b) => {
    let ll = a.length > b.length ? a.length : b.length;
    let carry = Array(ll + 1).fill(0);
    let answer = Array(ll + 1).fill(0);
    let t = 0;
    let i = 0;

    while (ll > 0 || carry !== 0) {
        t = (Number(a[a.length - 1 - i]) + Number(b[b.length - 1 - i] ? b[b.length - 1 - i] : 0)) + carry[a.length - 1 - i];
       // t = t > 1 ? carry === 2 ? 1 : 0 : t;
        t = t > 1 ? 0 : t;
        answer[answer.length - 1 - i] = t;
        ll--;
        i++;
    }

    return r.reverse().join("");
};

runTest = () => {
    console.log(addBinary("11", "1"));
    // console.log(addBinary("1010", "1011"));
    console.log(addBinary("1111", "1111"));
    // console.log(addBinary("1", "111"));
};

runTest();
