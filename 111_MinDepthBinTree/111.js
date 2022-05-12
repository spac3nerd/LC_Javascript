
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}


var minDepth = function(root) {

    let minD = Infinity;
    let inO = [];

    let visitNode = (node, depth) => {

        if (node.left === null && node.right === null) {
            minD = Math.min(minD, depth);
        }

        //visit left children
        if (node.left !== null) {
            visitNode(node.left, depth + 1);
        }


        //visit right children next
        if (node.right !== null) {

            visitNode(node.right, depth + 1);
        }
    };

    if (root !== null) {
        visitNode(root, 1);
    }
    else {
        return 0;
    }

    return minD;

};

//expect [1,2,3]
function test1() {
    let one = new TreeNode(3);
    let two = new TreeNode(9);
    let three = new TreeNode(20);
    let four = new TreeNode(15);
    let five = new TreeNode(7);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    console.log(minDepth(one));
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

    console.log(minDepth(one));
}

function runTest() {
    test1();
    // test2();
}

runTest();
