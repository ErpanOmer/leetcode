/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {}

    for (let i = 0; i < s.length; i++) {
        if (!map[`s-${s[i]}`]) {
            map[`s-${s[i]}`] = t[i]
        }

        if (!map[`t-${t[i]}`]) {
            map[`t-${t[i]}`] = s[i]
        }

        if (map[`s-${s[i]}`] !== t[i] || map[`t-${t[i]}`] !== s[i]) {
            return false
        }
    }

    return true
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))