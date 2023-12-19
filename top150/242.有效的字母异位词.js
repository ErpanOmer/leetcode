/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const string = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        string[s[i].charCodeAt() - 97]++
        string[t[i].charCodeAt() - 97]--
    }

    for (const str of string) {
        if (str !== 0) {
            return false
        }    
    }

    

    return true
};


// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(isAnagram('rat', 'car'))
console.log(isAnagram("anagram", "nagaram"))