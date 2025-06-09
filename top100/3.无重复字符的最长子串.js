/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = -1
    let j = 0
    let max = 1
    const map = new Map()
    const length = s.length

    if (length < 2) {
        return length
    }

    while(j < length) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }

        map.set(s[j], j)
        max = Math.max(j - i, max)
        j++
    }

    return max
};


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("abba"))