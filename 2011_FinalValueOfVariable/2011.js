/**
 * @param {string[]} operations
 * @return {number}
 */
let finalValueAfterOperations = (operations) => {
    let i = 0;
    operations.forEach((item, index) => {
        if (item[1] === "-")
            i--;
        else
            i++
    });

    return i;
};


runTest = () => {
    console.log(finalValueAfterOperations(["--X","X++","X++"]));
    console.log(finalValueAfterOperations(["++X","++X","X++"]));
};

runTest();
