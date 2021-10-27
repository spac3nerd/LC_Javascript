
//Attempt 1 - not going anywhere with this.
let firstMissingPositive1 = (nums) => {
    let upperBound = 0;
    let lowerBound = 0;
    let gaps = [];
    nums.forEach((item, index, array) => {
        if (item > upperBound) {
            upperBound = item;
        }
        if (item === (lowerBound + 1)) {
            lowerBound = item;
            //console.log(gaps);
        }
        else if ((item < upperBound) && (item !== lowerBound) && (item !== 0)){
            gaps.push(item);
        }

        console.log(gaps);
        gaps = gaps.reduce((acc, item, index, arr) => {
            if (item !== (lowerBound + 1)) {
                console.log(acc);
                acc.push(item);
            }
            else {
                lowerBound += 1;
            }

            return acc;
        }, []);

        console.log(gaps);
        console.log('----');
    });
    console.log(gaps);
    console.log(upperBound);
    console.log(lowerBound);
    return (lowerBound + 1) === upperBound ? upperBound + 1 : lowerBound + 1;
};



//attempt 2 - maybe we can sort the list first, which makes the check much, much easier
let firstMissingPositive = (nums) => {
    let len = nums.length;
    let filteredArray = [];

    nums.forEach((item, index) => {
        if (item > 0 && item < len) {
            filteredArray.push(item);
        }
    });


};

runTest = () => {
   // console.log(firstMissingPositive([1,2,0]));
    //console.log(firstMissingPositive([3,4,-1,1]));
    //console.log(firstMissingPositive([7,8,9,11,12]));
    //console.log(firstMissingPositive([2,1]));
    //console.log(firstMissingPositive([1,2,6,3,5,4]));
    console.log(firstMissingPositive([0,2,2,4,0,1,0,1,3]));
};

runTest();
