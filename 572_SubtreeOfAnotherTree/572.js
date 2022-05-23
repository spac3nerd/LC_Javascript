function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}


let isSubtree = (root, subroot) => {
    if (root !== null) {
        let isSubroot = false;
        if (root.val === subroot.val) {
            isSubroot = isSameTree(root, subroot);
        }

        let isLeftSubroot = isSubtree(root.left, subroot);
        let isRightSubroot = isSubtree(root.right, subroot);

        return isSubroot || isLeftSubroot || isRightSubroot;
    }
    return false;
};


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
    let one = new TreeNode(3);
    let two = new TreeNode(4);
    let three = new TreeNode(5);
    let four = new TreeNode(1);
    let five = new TreeNode(2);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    let one_1 = new TreeNode(4);
    let two_1 = new TreeNode(1);
    let three_1 = new TreeNode(2);
    one_1.left = two_1;
    one_1.right = three_1;

    console.log(isSubtree(one, one_1));
};


let test2 = () => {
    let one = new TreeNode(3);
    let two = new TreeNode(4);
    let three = new TreeNode(5);
    let four = new TreeNode(1);
    let five = new TreeNode(2);
    let six = new TreeNode(0);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = six;

    let one_1 = new TreeNode(4);
    let two_1 = new TreeNode(1);
    let three_1 = new TreeNode(2);
    one_1.left = two_1;
    one_1.right = three_1;

    console.log(isSubtree(one, one_1));
};




runTest = () => {
    // test1();
    test2();
};

runTest();
