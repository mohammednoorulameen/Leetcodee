/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    
    let char  = '';
    let arr = s.split('')

    console.log('check',arr)

    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            char += s[i]
            
        }
        else{
            let charcode  = s.charCodeAt(i-1)
            let val = charcode + Number(s[i])
            let letter  = String.fromCharCode(val)

            char += letter
        }
    }

    console.log(char)
    return char
};