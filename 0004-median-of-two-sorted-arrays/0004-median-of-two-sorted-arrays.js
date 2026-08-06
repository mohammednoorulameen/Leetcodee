/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let merged = [...nums1,...nums2].sort((a,b)=> a-b)
    let len = merged.length;
    let mid = Math.floor(len/2)
    if(len % 2 == 0){
        return (merged[mid] + merged[mid -1])/2
    }else{
        return (merged[mid])
    }

};