
function Node(val, children) {
    this.val = (val===undefined ? 0 : val);
    this.children = children;
}



/**
 * @param {Node|null} root
 * @return {number[]}
 */
let preorder = (root) => {
    let pO = [];
    let vN = (node) => {
        pO.push(node.val);
        if (node.children !== null) {
            node.children.forEach((i) => {
                vN(i);
            });
        }
    };
    if (root !== null) {
        vN(root);
    }
    return pO;
};

//expect [1,3,5,6,2,4]
function test1() {
    let one = new Node(1, [
        (new Node(3, [(new Node(5, null)), (new Node(6, null))])),
        (new Node(2, null)),
        (new Node(4, null))
    ]);

    console.log(preorder(one));
}


function runTest() {
    test1();
}

runTest();

