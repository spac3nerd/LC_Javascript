
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


function minimumBribes(q) {
    let minBribe = 0;
    let chaos = false;

    q.forEach((item, index, arr) => {
        if (!chaos) {
            //let delta = Math.max(item - (index + 1), 0);
            for (let k = 0; k < index; k++) {
                if (q[k] > (item)) {
                    minBribe++;
                }
            }
            if (!chaos) {
                chaos = item - (index + 1) > 2;
            }
        }

    });

    if (!chaos) {
        console.log(minBribe);
    }
    if (chaos) {
        console.log("Too chaotic");
    }
}



function runTest() {


    // minimumBribes([2,1,5,3,4]);
    minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
}

runTest();
