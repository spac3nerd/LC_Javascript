

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = (l1, l2) => {
    if (l1 === undefined) {
        if (l2 === undefined) {
            return undefined;
        }
        return l2;
    }
    if (l2 === undefined) {
        return l1;
    }

    // let sL = l1.val > l2.val ? l1 : l2;

    let cL1 = l1;
    //merge into l1
    while (l2.next !== null) {
        if (l2.val >= cL1.val) {

            let t = cL1.next;
            cL1.next = l2;
            cL1.next.next = t;
            l2 = l2.next;
        }

    }

    return l1;

};



//helps to automate test cases
function listNodeFactory(arr) {
    let firstNode;
    let currNode;
    for (let k = 0; k < arr.length; k++) {
        if (k === 0) {
            firstNode = new ListNode(arr[k]);
            currNode = firstNode;
        }
        else {
            currNode.next = new ListNode(arr[k]);
            currNode = currNode.next;
        }
    }

    return firstNode;
}


function runTest() {

    let l1 = listNodeFactory([1, 2, 4]);
    let l2 = listNodeFactory([1, 3, 4]);
    let a1 = listNodeFactory([]);
    let a2 = listNodeFactory([]);

    console.log(mergeTwoLists(l1, l2));
    // console.log(mergeTwoLists(a1, a2));
}

runTest();



