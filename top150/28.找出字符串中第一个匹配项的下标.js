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

    let j = 0

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            j++
        } else {
            if (j > 0) {
                i = i -j
            }

            j = 0
        }

        if (j === needle.length) {
            return i - j + 1
        }
    }

    return -1
};


// KMP算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("abc", "c"))
console.log(strStr("mississippi", "issip"))