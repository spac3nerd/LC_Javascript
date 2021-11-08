

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

let merge = (l1, l2) => {
    let l = new ListNode(0);
    let p = l;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        }
        else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1 != null)
        p.next = l1;

    if (l2 != null)
        p.next = l2;

    return l.next;
};

let sortList = (head) => {

    if (head === null) {
        return null
    }
    if (head.next === null) {
        return head;
    }
    let p = null;
    let s = head;
    let f = head;

    while (f != null && f.next != null) {
        p = s;
        s = s.next;
        f = f.next.next;
    }

    p.next = null;
    let l1 = sortList(head);
    let l2 = sortList(s);

    return merge(l1, l2);
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

    let l1 = listNodeFactory([4,2,1,3]);
    let l2 = listNodeFactory([-1,5,3,4,0]);

    console.log(sortList(l1));
    console.log(sortList(l2));
}

runTest();


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//A naive n^2 solution
// let sortList = (head) => {
//     if (head === null) {
//         return null
//     }
//     if (head.next === null) {
//         return head;
//     }
//
//     let i = head;
//     let lastItem = head;
//     let min = head.val;
//     let minRef = null;
//
//     //merge into l1
//     while (head.next !== null) {
//         if (head.next !== null ){
//             if (head.val < Math.min(head.val, min)) {
//                 minRef = head;
//             }
//             if (head.val >= head.next.val) {
//                 let t = head.next;
//                 let n = head.next.next;
//                 if (n){
//                     head.next = n;
//                     t.next = head;
//                     lastItem = t;
//                 }
//                 else {
//                     head.next = null;
//                     t.next = head;
//                     lastItem = t;
//                 }
//
//                 // if (i === head) {
//                 //     i = lastItem;
//                 // }
//             }
//
//         }
//
//
//     }
//     console.log(minRef);
//     return i;
//
// };
