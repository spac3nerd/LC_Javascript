//trivial problem
/**
 * @param {number} n
 * @return {number}
 */
let fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};






function runTest() {
    console.log(fib(2));
    console.log(fib(3));
    console.log(fib(4));
}

runTest();
