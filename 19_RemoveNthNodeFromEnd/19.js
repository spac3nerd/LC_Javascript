function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
}


let removeNthFromEnd = (head, n) => {
    //In order to capture the case of the single item in the list, I can add a dummy precursor to head
    let init = new ListNode(0, head);
    let fast = init;
    let slow = init;
    let space = 0;

    while (fast.next) {
        fast = fast.next;

        if (space === n) {
            slow = slow.next;
        }
        else {
            space++;
        }
        if (fast.next === null) {
            //differentiate between the slow being the last element and it being somewhere else
            if (slow.next === fast){
                slow.next = fast.next;
            }
            else {
                slow.next = slow.next.next;
            }
        }
    }

    return init.next;
};


//helps to automate test cases
let listNodeFactory = (arr) => {
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
};

let test1 = () => {
    let l1 = listNodeFactory([1,2,3,4,5]);

    console.log(removeNthFromEnd(l1, 2));
};

let test2 = () => {
    let l1 = listNodeFactory([1]);

    console.log(removeNthFromEnd(l1, 1));
};

let test3 = () => {
    let l1 = listNodeFactory([1, 2]);

    console.log(removeNthFromEnd(l1, 1));
};

let test4 = () => {
    let l1 = listNodeFactory([1, 2, 3]);

    console.log(removeNthFromEnd(l1, 3));
};


let runTest = () => {
    // test1();
    // test2();
    // test3();
    test4();
};

runTest();
