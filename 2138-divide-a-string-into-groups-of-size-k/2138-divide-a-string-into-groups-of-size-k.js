/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {

    let arr = [];
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str += s[i];
        console.log(str)
        if (str.length == k) {
            console.log('check this working ')
            arr.push(str)
            str = ""
        }
    }

    if (str.length > 0) {
        while (str.length < k) {
            str += fill;
        }
        arr.push(str)
    }

    return arr
    console.log(arr)

};