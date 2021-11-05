
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let postorderTraversal = (root) => {

    let inO = [];

    let visitNode = (node) => {


        //visit left children
        if (node.left !== null) {
            visitNode(node.left);
        }


        //visit right children next
        if (node.right !== null) {

            visitNode(node.right);
        }
        inO.push(node.val);
    };

    if (root !== null) {
        visitNode(root);
    }

    return inO;
};

//expect [2,3,1]
function test1() {
    let one = new TreeNode(2);
    let two = new TreeNode(1);
    let three = new TreeNode(3);
    one.left = two;
    one.right = three;

    console.log(postorderTraversal(one));
}

//expect [3,2,1]
function test2() {
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    one.right = two;
    two.left = three;

    console.log(postorderTraversal(one));
}

function runTest() {
    test1();
    test2();
}

runTest();

