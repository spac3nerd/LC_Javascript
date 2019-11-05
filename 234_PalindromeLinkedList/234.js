
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//We can leverage integer reversal since we don't know where the midpoint is without having to traverse the entire list
    //This will satisfy the O(n) time
var isPalindrome = function(head) {

    //read the number
    let mag = 0;
    let i = 0;
    let v;
    while (head !== null) {
        v = head.val;
        if (v < 0)
            return true;
        i += v * Math.pow(10, mag);
        mag++;
        head = head.next;
    }

    let reversed = 0;
    let y = i;
    while (mag--) {
        reversed += (y % 10) * Math.pow(10, mag);
        y = Math.trunc(y / 10);
    }

    return i - reversed === 0;
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
    let a1 = linkedListFactory([1,2]);
    let a2 = linkedListFactory([1,2,2,1]);
    let a3 = linkedListFactory([1,2,1]);
    // console.log(isPalindrome(a1));
    // console.log(isPalindrome(a2));
    console.log(isPalindrome(a3));
}

runTest();