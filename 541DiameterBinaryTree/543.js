


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}


var diameterOfBinaryTree = function(root) {

    let maxLR = 0;

    let visitNode = (node) => {

        if (node === null) {
            return 0;
        }

        let l = visitNode(node.left);
        let r = visitNode(node.right);
        maxLR = Math.max(maxLR, l + r);

        return Math.max(l, r) + 1;

    };

    if (root !== null) {
        visitNode(root, 1);
    }
    else {
        return 0;
    }

    return maxLR;

};

//expect [1,2,3]
function test1() {
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    console.log(diameterOfBinaryTree(one));
}


function test2() {
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    console.log(diameterOfBinaryTree(one));
}

function runTest() {
    test1();
    // test2();
}

runTest();
