/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    
    let count = {}
    let result = [];
    for(let i of arr){
        count[i] = (count[i]|| 0)+1
    }

for(let i = 0; i < arr.length; i++){
    if(count[arr[i]] == 1){
        result.push(arr[i])
    }
}
    console.log(result)
    if(result.length >= k){
    return result[k-1]
    }else{
        return ""
    }
};