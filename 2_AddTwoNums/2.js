
//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}


//Naive implementation - it fails test cases which overflow the Integer type
var addTwoNumbers_imp1 = function(l1, l2) {
    let n1 = [];
    let n2 = [];
    while (l1 !== null) {
        n1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        n2.push(l2.val);
        l2 = l2.next;
    }

    n1 = n1.reverse().join('');
    n2 = n2.reverse().join('');
    let result = (parseInt(n1) + parseInt(n2)).toString();

    let k = result.length;
    let firstNode = new ListNode(0);
    let prevNode = null;

    while (k--) {
        if (prevNode !== null) {
            prevNode.next = new ListNode(Number(result[k]));
            prevNode = prevNode.next;

        }
        else {
            firstNode = new ListNode(Number(result[k]));
            prevNode = firstNode;
        }
    }

    return firstNode;
};



//Second Implementation - I realized that having the integers in a reversed linked
//  list is actually beneficial since we can compute the result piecewise
var addTwoNumbers = function(l1, l2) {
    //quick function to help us out
    function sum(v1, v2) {
        return (v1 === null ? 0 : v1.val) + (v2 === null ? 0 : v2.val);
    }

    let carry = 0;
    let result = undefined;
    let firstNode = new ListNode(0);
    let prevNode = null;
    while (l1 !== null || l2 !== null) {
        //on the first pass
        result = sum(l1, l2) + carry;
        if (prevNode === null) {
            firstNode = new ListNode((result % 10));
            prevNode = firstNode;
        }
        //on subsequent passes
        else {
            prevNode.next = new ListNode((result % 10));
            prevNode = prevNode.next;
        }
        carry = Math.trunc(result / 10);


        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }


    }
    if (carry !== 0) {
        let newNode = new ListNode(carry);
        prevNode.next = newNode;
        return firstNode;
    }

    return firstNode;
};





//helps to automate test cases
function linkedListFactory(arr) {
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
    let l1 = new ListNode(2);
    let e2 = new ListNode(4);
    let e3 = new ListNode(3);
    l1.next = e2;
    e2.next = e3;

    let l2 = new ListNode(5);
    let l2e2 = new ListNode(6);
    let l2e3 = new ListNode(4);
    l2.next = l2e2;
    l2e2.next = l2e3;

   // let a1 = linkedListFactory([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    //let a2 = linkedListFactory([5,6,4]);

    let a1 = linkedListFactory([1]);
    let a2 = linkedListFactory([9,9]);

    //let result = addTwoNumbers(l1, l2);
    let result = addTwoNumbers(a1, a2);
    console.log(result);
}

runTest();