/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let string = ''
    s = s.trim()
    let length = s.length

    if (!length) {
        return string
    }

    let temp = ''
    while(length--) {
        if (s[length] !== ' ') {
            temp = s[length] + temp
            continue
        }

        if (temp.length > 0) {
            string += temp + ' '
            temp = ''
        }   
    }

    return string + temp
};


console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))