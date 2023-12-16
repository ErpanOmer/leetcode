/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!t || t.length > s.length) {
        return ''
    }

    const map = {}
    const count = {}
    let i = 0
    let j = -1
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    let cnt = 0

    for (const ss of t) {
        count[ss] = !count[ss] ? 1 : ++count[ss] 
    }

    while(++j < s.length) {
        map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]]

        if (map[s[j]] <= count[s[j]]) {
            cnt++
        }

        if (cnt >= t.length) {
            min = Math.min(j - i + 1, min)

            while(!count[s[i++]]) {
            }

            cnt--

            console.log(i)
        }

    }

    return s.substring(min - 1, max + 1)
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('aaaa', 'aaa'))
console.log(minWindow('ab', 'b'))