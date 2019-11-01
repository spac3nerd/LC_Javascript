//First Run at the problem

// /**
//  * initialize your data structure here.
//  */
// var MinStack = function() {
//     this.stack = [];
//     this.min = {
//         min: undefined
//     };
// };
//
// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     if (this.min.min === undefined || x < this.min.min) {
//         this.min.min = x;
//     }
//     this.stack.push(x);
// };
//
// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     var t = this.stack.pop();
//     //recalc global min
//     if (t === this.min.min) {
//         this.min.min = undefined;
//         for (var k = 0; k < this.stack.length; k++) {
//             if (this.min.min === undefined || this.stack[k] < this.min.min) {
//                 this.min.min = this.stack[k];
//             }
//         }
//     }
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.min.min;
// };


//Attempt number 2 - sing two parallel stacks, more space but less time

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min.length === 0) {
        this.min.push(x);
    }
    else {
        this.min.push(Math.min(this.min[this.min.length - 1], x)); //push the current minimum for the given stack elem
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};




function runTest() {
    var minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();
    minStack.pop();
    minStack.top();
    minStack.getMin();
}

runTest();




/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */