function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}


let isSameTree = (p, q) => {
    if ((p === null && q !== null ) || (p !== null && q === null)) {
        return false;
    }
    if (p !== null && q !== null) {
        if (p.val !== q.val) {
            return false;
        }
        return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) === true;
    }
    return true;
};

let test1 = () => {
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    one.left = two;
    one.right = three;

    let one_1 = new TreeNode(1);
    let two_1 = new TreeNode(2);
    let three_1 = new TreeNode(3);
    one_1.left = two_1;
    one_1.right = three_1;

    console.log(isSameTree(one, one_1));
};

let test2 = () => {
    console.log(isSameTree(null, null));
};

let test3 = () => {
    let one = new TreeNode(10);
    let two = new TreeNode(5);
    let three = new TreeNode(15);
    one.left = two;
    one.right = three;

    let one_1 = new TreeNode(10);
    let two_1 = new TreeNode(5);
    let three_1 = new TreeNode(15);
    one_1.left = two_1;
    two_1.right = three_1;

    console.log(isSameTree(one, one_1));
};


runTest = () => {
    test1();
    test2();
    test3();
};

runTest();
