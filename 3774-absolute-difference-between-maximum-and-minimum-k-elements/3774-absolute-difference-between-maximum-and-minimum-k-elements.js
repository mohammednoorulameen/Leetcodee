/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let sort = nums.sort((a,b)=> a-b)
    let large = nums.slice(0,k);
    let small = nums.slice(nums.length - k)
    let add1 = large.reduce((acc,val)=> val + acc,0)
    let add2 = small.reduce((acc,val)=> val + acc,0)
    let result = add1 - add2
        console.log('large',large, add1);
    console.log('small', small,  add2,result);
    return Math.abs(result)



};