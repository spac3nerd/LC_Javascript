/**
 * @param {string[]} tokens
 * @return {number}
 */
//This is the classic stack problem
let evalRPN = (tokens) => {

    while (tokens.length > 1) {
        let a = tokens.pop();
    }

    return tokens[0];
};


function runTest() {
    console.log(evalRPN(["2","1","+","3","*"]));
}

runTest();
