/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join() === t.split('').sort().join()
};


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const fill = Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        fill[s[i].charCodeAt() - 97]++
        fill[t[i].charCodeAt() - 97]--
    }


    for (const f of fill) {
        if (f !== 0) {
            return false
        } 
    }

    return true
};

console.log(isAnagram('rat', 'car'))