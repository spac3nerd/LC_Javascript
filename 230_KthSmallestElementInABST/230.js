
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}



//I think we can leverage the fact that a valid BST is really a sorted list when read in-order
//  therefore, we can just keep build a list until we hit k
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let kthSmallest1 = (root, k) => {

    let l = [];
    let f = -1;

    let visitNode = (node) => {

        //visit left children first
        if (node.left !== null) {

            visitNode(node.left);
        }

        l.push(node.val);
        if (l.length === k) {
            f = node.val;
        }

        //visit right children next
        if (node.right !== null) {
            visitNode(node.right);
        }

    };

    visitNode(root);

    return f;
};


//Solution 2 - I think I can optimize some of the memory usage by removing the need for the array
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let kthSmallest = (root, k) => {

    let f = -1;
    let i = 0;

    let visitNode = (node) => {

        //visit left children first
        if (node.left !== null) {

            visitNode(node.left, i);
        }

        i++;
        if (i === k) {
            f = node.val;
        }

        //visit right children next
        if (node.right !== null) {
            visitNode(node.right, i);
        }

    };

    visitNode(root, i);

    return f;
};

//expect true
function test1() {
    let one = new TreeNode(3);
    let two = new TreeNode(1);
    let three = new TreeNode(2);
    let four = new TreeNode(4);
    one.left = two;
    one.right = four;
    two.right = three;

    console.log(kthSmallest(one, 1));
}

//expect false
function test2() {
    let one = new TreeNode(1);

    console.log(kthSmallest(one, 1));
}
function test3() {
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    one.right = two;

    console.log(kthSmallest(one, 1));
}



function runTest() {
    test1();
    test2();
    test3();

}

runTest();




