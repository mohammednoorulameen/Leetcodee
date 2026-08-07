/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let arr = [];
    let index = 0
    for (let i = 0; i < nums1.length; i++) {
        index = nums2.indexOf(nums1[i])
        let found = -1
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                found = nums2[j]
                break;
            }
        }
        arr.push(found)

    }
    console.log(arr)
    return arr
};