/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = {}

    s = s.split(' ')

    if (pattern.length !== s.length) {
        return false
    }

    for (let i = 0; i < pattern.length; i++) {
        if (!map[`s-${pattern[i]}`]) {
            map[`s-${pattern[i]}`] = s[i]
        }

        if (!map[`t-${s[i]}`]) {
            map[`t-${s[i]}`] = pattern[i]
        }

        if (map[`s-${pattern[i]}`] !== s[i] || map[`t-${s[i]}`] !== pattern[i]) {
            return false
        }
    }

    return true
};



// 时间复杂度：O(m)
// 空间复杂度：O(m)

console.log(wordPattern('abba', "dog cat cat dog"))
console.log(wordPattern('abba', "dog cat cat fish"))
console.log(wordPattern('aaaa', "dog cat cat dog"))
console.log(wordPattern('jquery', 'jquery'))
