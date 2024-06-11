/**
 * @param {string} s
 * @return {string}
 */

// 暴力破解
var longestPalindrome = function(s) {
    const length = s.length
    let max = 0
    let string = ''

    for (let i = 0; i < length; i++) {
        let ii = i - 1
        let jj = i + 1
        let len = 1

        while(ii >= 0 && s[i] === s[ii]) {
            ii--
            len++
        }

        while(jj < length && s[i] === s[jj]) {
            jj++
            len++
        }

        while(ii >= 0 && jj < length && s[ii] === s[jj]) {
            ii--
            jj++
            len += 2
        }

        if (len > max) {
            max = len
            string = s.substring(ii + 1, jj)
        }        
    }

    return string
};




console.log(longestPalindrome("aacabdkacaa"))