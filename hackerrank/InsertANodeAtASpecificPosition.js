
function SinglyLinkedListNode(data, next){
    this.data = (data===undefined ? 0 : data);
    this.next = (data===undefined ? null : data);
}


function insertNodeAtPosition(llist, data, position) {
    let r = llist;
    let prev = null;
    let c = 0;

    while (c < position && r !== null) {
        prev = r;
        r = r.next;
        c++;
    }

    let nn = new SinglyLinkedListNode();
    nn.data = data;
    prev.next = nn;
    nn.next = r;

    return llist;

}


function listNodeFactory(arr) {
    let firstNode;
    let currNode;
    for (let k = 0; k < arr.length; k++) {
        if (k === 0) {
            firstNode = new SinglyLinkedListNode(arr[k]);
            currNode = firstNode;
        }
        else {
            currNode.next = new SinglyLinkedListNode(arr[k]);
            currNode = currNode.next;
        }
    }

    return firstNode;
}

function runTest() {

    let l1 = listNodeFactory([1,2,3]);
    //let l2 = listNodeFactory([-1,5,3,4,0]);

    console.log(insertNodeAtPosition(l1, 4, 2));
    //console.log(insertNodeAtPosition(l2));
}

runTest();
