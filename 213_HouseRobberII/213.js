/**
 * @param {number[]} nums
 * @return {number}
 */

//Builds on the solution to House Robber I, except I keep track of whether or not the first house was robbed
// and the hash map tracks the yes/no decisions of the tree
let rob_1 = (nums) => {

    let hash = {};

    let decision = (i, robbedRoot) => {
        if (i > nums.length - 1) {
            return 0;
        }
        if (i === 0) {
            robbedRoot = !robbedRoot;
        }
        let yes;
        let lookup = String(i).concat(String(robbedRoot ? 'y' : 'n'));
        if (i === nums.length - 1 && robbedRoot) {
            yes = 0;
        }
        else if (i === nums.length - 1) {
            yes = nums[i] + decision(i + 2, robbedRoot);
        }
        else {
            yes = hash.hasOwnProperty(lookup) ? hash[lookup] : nums[i] + decision(i + 2, robbedRoot);
        }
        let no;
        if (i === 0) {
            no = hash.hasOwnProperty(lookup) ? hash[lookup] : decision(i + 1, false);
            lookup = "0n";
            hash["0n"] = Math.max(yes, no);
        }
        else {
            no = hash.hasOwnProperty(lookup) ? hash[lookup] : decision(i + 1, robbedRoot);
            hash[lookup] = Math.max(yes, no);
        }

        return hash[lookup];
    };

    if (nums.length === 1) {
        return nums[0];
    }
    return decision(0, false);

};

//I think this can be simplified to simply returning the max between two lists, one without the first element
//and the second without the last element
let rob = (nums) => {

    let decision = (nums) => {

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

    if (nums.length === 1) {
        return nums[0];
    }
    let b = [...nums];
    let a = nums.splice(1, nums.length);
    b = b.splice(0, b.length - 1);
    return Math.max(decision(a), decision(b));

};

runTest = () => {
    console.log(rob([1, 2 , 3, 1]));
    // console.log(rob([1, 2 , 3]));
    // console.log(rob([1]));
    // console.log(rob([2,1,1,2]));
    // console.log(rob([1,3,1,3,100]));

};

runTest();
