
function Node(val, children) {
    this.val = (val===undefined ? 0 : val);
    this.children = children;
}


//This is really just prob 589 again, just doing it for the sake of doing it
// I only change the forEach to a standard for loop for extra performance
/**
 * @param {Node|null} root
 * @return {number[]}
 */
let postorder = (root) => {
    let pO = [];
    let vN = (node) => {

        if (node.children !== null) {
            for (let k = 0; k < node.children.length; k++){
                vN(node.children[k]);
            }
        }
        pO.push(node.val);
    };
    if (root !== null) {
        vN(root);
    }
    return pO;
};

//expect [5,6,3,2,4,1]
function test1() {
    let one = new Node(1, [
        (new Node(3, [(new Node(5, null)), (new Node(6, null))])),
        (new Node(2, null)),
        (new Node(4, null))
    ]);

    console.log(postorder(one));
}


function runTest() {
    test1();
}

runTest();

