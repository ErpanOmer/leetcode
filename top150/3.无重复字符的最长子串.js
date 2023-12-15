/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    const map = {}

    for (let i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            j = Math.max(j, map[s[i]] + 1)
        }

        map[s[i]] = i
        max = Math.max(max, i - j + 1)
    }

    return max
};

// 移动窗口
// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("aab"))
console.log(lengthOfLongestSubstring("dvdf"))