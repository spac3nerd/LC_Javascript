/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = (nums1, nums2) => {

    let smallerArr = nums1.length > nums2.length ? nums2 : nums1;
    let largerArr = smallerArr === nums2 ? nums1 : nums2;

    if (largerArr.length === 1) {
        if (smallerArr.length === 0) {
            return largerArr[0];
        }
        return (largerArr[0] + smallerArr[0]) / 2;
    }

    let findAndInsert = (val, largerArr) => {
        let splitMiddle = (start, end) => {
            let mid = Math.ceil((start + end) / 2);

            if ((start === 0) && (start + 1 === end)) {
                if (val <= largerArr[start]) {
                    largerArr.splice(0, 0, val);
                }
                else if (val <= largerArr[mid]) {
                    largerArr.splice(mid, 0, val);
                }

                else {
                    largerArr.push(val);
                }
                return;
            }

            if ((end === largerArr.length - 1) && (end - 1 === start)) {
                if (val <= largerArr[mid]) {
                    largerArr.splice(mid, 0, val);
                }
                else {
                    largerArr.push(val);
                }
                return;
            }




            // if (val >= largerArr[mid - 1] && val <= largerArr[mid + 1]) {
            //     largerArr.splice(mid, 0, val);
            // }
            //todo: cases for start and end
            // if (end === largerArr.length - 1) {
            //     largerArr.splice(end, 0, val);
            // }
            // else if (end === 0) {
            //     largerArr.splice(0, 0, val);
            // }

            if (val >= largerArr[mid - 1] && val <= largerArr[mid]) {
                largerArr.splice(mid, 0, val);
                return;
            }
            if (val > largerArr[mid]) {
                splitMiddle(mid, end);
                return;
            }
            if (val < largerArr[mid]) {
                splitMiddle(start, mid);
                return;
            }


        };

        splitMiddle(0, largerArr.length -1);
    };

    while (smallerArr.length > 0) {
        findAndInsert(smallerArr[0], largerArr);
        smallerArr.shift();
    }

    console.log(largerArr);

    let totalLen = largerArr.length;

    if (totalLen % 2 === 0) {
        return (largerArr[Math.ceil((totalLen - 1)/ 2)] + largerArr[Math.floor((totalLen - 1) / 2)]) / 2;
    }
    else {
        return largerArr[(totalLen - 1) / 2];
    }

};



function runTest() {
    // console.log(findMedianSortedArrays([1,3], [2]));
    // console.log(findMedianSortedArrays([1,2], [3,4]));
    // console.log(findMedianSortedArrays([3], [-2, -1]));
    // console.log(findMedianSortedArrays([2,2,4,4], [2,2,4,4]));
    // console.log(findMedianSortedArrays([1,2], [1,1]));
    //console.log(findMedianSortedArrays([100000], [100001]));
    console.log(findMedianSortedArrays([], [1]));
}

runTest();



