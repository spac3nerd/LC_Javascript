

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
    //The JS solution, where we can inject a property into ListNode to keep track of loops
let hasCycle1 = (head) => {
    if (head) {
        while (head.next) {
            if (head.hasOwnProperty("visited") && head.visited) {
                return true;
            }
            head.visited = true;
            head = head.next;
        }
    }
    //no loop
    return false;

};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Using the fast-slow pointer method
let hasCycle = (head) => {
    let fast = null;
    if (head) {
        while (head.next) {
            if (fast === null) {
                fast = head.next;
            }
            //comparing the reference, not the value
            if (head === fast) {
                return true;
            }
            head = head.next;
            if (fast.next) {
                fast = fast.next.next;
            }
            else {
                return false;
            }

        }
    }
    //no loop
    return false;

};




let test1 = () => {
    let one = new ListNode(3);
    let two = new ListNode(2);
    let three = new ListNode(0);
    let four = new ListNode(-4);
    one.next = two;
    two.next = three;
    three.next = four;
    four.next = two;

    console.log(hasCycle(one));
};

let test2 = () => {
    let one = new ListNode(1);
    let two = new ListNode(2);
    one.next = two;

    console.log(hasCycle(one));
};


function runTest() {
    test1();
    test2();

}

runTest();



