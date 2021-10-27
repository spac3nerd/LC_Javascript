//This one is very trivial - not sure why they bothered

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let getConcatenation1 = (nums) => {
    let n = nums.length;
    let c =  new Array(n);
    nums.forEach((item, index) => {
        c[index] = nums[index];
        c[index + n] = nums[index];
    });

    return c;
};

//an even more trivial solution
let getConcatenation = (nums) => {
    return [...nums,...nums];
};



runTest = () => {
    console.log(getConcatenation([1,2,1]));
    console.log(getConcatenation([1,3,2,1]));
};

runTest();
