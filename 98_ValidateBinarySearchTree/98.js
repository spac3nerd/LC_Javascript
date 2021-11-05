
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val);
     this.left = (left===undefined ? null : left);
     this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST1 = (root) => {

    let v = true;

    let visitNode = (node, min, max, isLeft) => {


        if (min && isLeft === true) {
            if (node.val > max) {
                v = false;
            }
        }
        if (max && isLeft === false) {
            if (node.val < min) {
                v = false;
            }
        }


        //visit left children first
        if (node.left !== null) {
            if (node.left.val >= node.val) {
                v = false;
            }
            // else if (node.val !== k) {
            //     if (node.left.val >= k) {
            //         v = false;
            //     }
            // }
            else {
                visitNode(node.left, min, max, true);
            }
        }
        //visit right children next
        if (node.right !== null) {
            if (node.right.val <= node.val) {
                v = false;
            }
            // else if (node.val !== k) {
            //     if (node.right.val <= k) {
            //         v = false;
            //     }
            // }
            else {
                visitNode(node.right, node.val, max, false);
            }
        }

    };

    visitNode(root, root.val, root.val, null);

    return v;

};



/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST = (root) => {

    let v = true;
    let min = null;

    let visitNode = (node) => {

        //visit left children first
        if (node.left !== null) {
            if (node.left.val >= node.val) {
                v = false;
            }

            else {
                visitNode(node.left);
            }
        }

        if (min !== null) {
            if (node.val < min) {
                v = false;
            }
        }
        min = node.val;


        //visit right children next
        if (node.right !== null) {
            if (node.right.val <= node.val) {
                v = false;
            }

            else {
                visitNode(node.right);
            }
        }

    };

    visitNode(root);

    return v;

};

//expect true
function test1() {
    let one = new TreeNode(2);
    let two = new TreeNode(1);
    let three = new TreeNode(3);
    one.left = two;
    one.right = three;

    console.log(isValidBST(one));
}

//expect false
function test2() {
    let one = new TreeNode(5);
    let two = new TreeNode(1);
    let three = new TreeNode(4);
    let four = new TreeNode(3);
    let five = new TreeNode(6);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    console.log(isValidBST(one));
}

//expect false
function test3() {
    let one = new TreeNode(2);
    let two = new TreeNode(2);
    let three = new TreeNode(2);
    one.left = two;
    one.right = three;

    console.log(isValidBST(one));
}

//expect false
function test4() {
    let one = new TreeNode(5);
    let two = new TreeNode(4);
    let three = new TreeNode(6);
    let four = new TreeNode(3);
    let five = new TreeNode(7);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    console.log(isValidBST(one));
}


//expect true
function test5() {
    let one = new TreeNode(3);

    let two = new TreeNode(1);
    let three = new TreeNode(5);

    let four = new TreeNode(0);
    let five = new TreeNode(2);
    let six = new TreeNode(4);
    let seven = new TreeNode(6);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;

    console.log(isValidBST(one));
}


function something() {

    let originalArr = [{
        id: 3
    },{
        id: 1
    }, {
        id: 2
    }, {
        id: 1
    }, {
        id: 3
    }];

    let map = {};

    originalArr = originalArr.reduce((arr, item, index) => {
        if (!map.hasOwnProperty(item.id)) {
            map[item.id] = true;
            arr.push(item);
        }

        return arr;
    }, []);

    console.log(originalArr);
}

function runTest() {
    test1();
    test2();
    test3();
    test4();
    test5();
}

runTest();





//
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// let isValidBST = (root) => {
//
//     let v = true;
//
//     let visitNode = (node, min, max) => {
//
//
//         if (min) {
//             if (node < min) {
//                 v = false;
//             }
//         }
//         if (max) {
//             if (node > max) {
//                 v = false;
//             }
//         }
//
//
//         //visit left children first
//         if (node.left !== null) {
//             if (node.left.val >= node.val) {
//                 v = false;
//             }
//             // else if (node.val !== k) {
//             //     if (node.left.val >= k) {
//             //         v = false;
//             //     }
//             // }
//             else {
//                 visitNode(node.left, null, max);
//             }
//         }
//         //visit right children next
//         if (node.right !== null) {
//             if (node.right.val <= node.val) {
//                 v = false;
//             }
//             // else if (node.val !== k) {
//             //     if (node.right.val <= k) {
//             //         v = false;
//             //     }
//             // }
//             else {
//                 visitNode(node.right, min, null);
//             }
//         }
//
//     };
//
//     visitNode(root, null, null);
//
//     return v;
//
// };
