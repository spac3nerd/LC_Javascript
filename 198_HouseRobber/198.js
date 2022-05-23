
/**
 * @param {number[]} nums
 * @return {number}
 */
    //OOps. I misread the prompt, this won't work
let rob_fail = (nums) => {
    let a = 0, b = 0;
    nums.forEach( (num, i) => {
        if (i % 2 === 0) {
            a += num;
        }
        else {
            b += num;
        }
    });

    return Math.max(a, b);

};

//Setting up a decision tree with a lookup memoization object
let rob_1 = (nums) => {

    let hash = {};

    let decision = (i) => {
        if (i > nums.length - 1) {
            return 0;
        }
        let yes = hash[i] ? hash["y" + i] : nums[i] + decision(i + 2);
        let no = hash[i] ? hash["n" + i] :decision(i + 1);
        hash["y" + i] = yes;
        hash["n" + i] = no;
        return Math.max(yes, no);
    };
    return decision(0);

};


/**
 * @param {number[]} nums
 * @return {number}
 */

//same as my previous attempt, but without distinguishing between yes and no branches
let rob = (nums) => {

    let hash = {};

    let decision = (i) => {
        if (i > nums.length - 1) {
            return 0;
        }
        let yes = hash.hasOwnProperty(i) ? hash[i] : nums[i] + decision(i + 2);
        let no = hash.hasOwnProperty(i) ? hash[i] : decision(i + 1);
        hash[i] = Math.max(yes, no);
        return hash[i];
    };
    return decision(0);

};


runTest = () => {
    console.log(rob([1, 2 , 3, 1]));
    console.time();
    console.log(rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
    console.timeEnd();

};

runTest();
