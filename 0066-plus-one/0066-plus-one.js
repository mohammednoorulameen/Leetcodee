/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let digit = digits.join('')
    let int = BigInt(digit)
    let add = int + 1n;
    return add.toString().split('').map(Number)
};