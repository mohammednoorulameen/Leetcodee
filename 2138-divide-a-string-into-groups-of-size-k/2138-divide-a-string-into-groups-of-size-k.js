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
        if (str.length == k) {
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

};