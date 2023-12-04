/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let string = strs[0]

    // 查找最短的字符串
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < string.length) {
            string = strs[i]
        }
    }

    let length = string.length

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (string[i] !== strs[j][i]) {
                return string.substring(0, i)
            }
        }
        
    }

    return string
};


// 时间复杂度：O(m * n)
// 空间复杂度：O(1)

// 测试用例
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix(["a","ab"]))
console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["abca","aba","aaab"]))