/**
 * @param {number} x
 * @return {number}
 */
//First solution - using a sorted list which we break in half every iteration
    //This is way too fancy, but it was fun
var mySqrt_1 = function(x) {
    let max;


    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }

    //we must find an upper bound
    let boundFound = false;
    let a = 1;
    while (!boundFound) {
        if (a * a > x) {
            boundFound = true;
        }
        else {
            a = 2 * a;
        }
    }
    max = a;

    let arr = new Array(max);
    let k = 1;
    while (k <= max) {
        arr[k - 1] = k;
        k++;
    }

    function calc(target, array) {
        if (array.length === 1) {
            return array[0]; //closest solution
        }
        //get the midpoint of the array
        let mid = Math.ceil(array.length / 2);
        let val = array[mid];
        let d = val * val;
        if (d === target) {
            return val;
        }
        if (d > target) {
            //iterate on bottom half
            return calc(target, array.splice(0, mid));
        }
        else {
            //iterate on top half
            return calc(target, array.slice(mid));
        }
    }

    return calc(x, arr);

};

//This one is trivial, but I think there's an even better solution by using the mechanism from the first solution
var mySqrt_2 = function(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }

    //we must find an upper bound
    let a = 1;

    while (!boundFound) {
        if (a * a > x) {
            return a - 1;
        }
        else {
            a++;
        }
    }
};

var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }

    let max = x;

    function calc(target, cur) {
        //get the midpoint of the array
        let mid = Math.ceil(cur / 2);
        let val = mid * mid;
        if (val === target) {
            return val;
        }
        if (val > target) {
            //iterate on bottom half
            return calc(target, mid);
        }
        else {
            //iterate on top half
            return calc(target, (mid + cur) / 2);
        }

    }

    return calc(x, max);
};



function runTest() {
    console.log(mySqrt(8));
}

runTest();