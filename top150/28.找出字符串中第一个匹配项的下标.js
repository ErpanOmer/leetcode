/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle) {
        return 0
    }

    if (needle.length > haystack.length) {
        return -1
    }

    for (let i = 0; i < haystack.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            let length = needle.length

            while(length--) {
                if (haystack[i + length] !== needle[length]) {
                    break
                }
            }

            if (length === -1) {
                return i
            }
        }
    }

    return -1
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("abc", "c"))
console.log(strStr("mississippi", "issip"))