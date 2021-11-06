

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
    if (l1 === null) {
        if (l2 === null) {
            return null;
        }
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    let target = l1.val <= l2.val ? 1 : 2;

    let retRef = target === 1 ? l1 : l2;

    let cL1 = target === 1 ? l1 : l2;

    let oL = cL1 === l1 ? l2 : l1;
    //merge into l1
    while (oL !== null) {
        if (oL.val >= cL1.val) {
            if (cL1.next && oL.val > cL1.next.val) {
                cL1 = cL1.next;
                continue;
            }
            let t = cL1.next;
            let n = oL.next;
            cL1.next = oL;
            cL1.next.next = t;
            oL = n;
            cL1 = cL1.next;
        }
        else {
            cL1 = cL1.next;
        }

    }

    return retRef;

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
    let a1 = listNodeFactory([2]);
    let a2 = listNodeFactory([1]);

    console.log(mergeTwoLists(l1, l2));
   console.log(mergeTwoLists(a1, a2));
}

runTest();



