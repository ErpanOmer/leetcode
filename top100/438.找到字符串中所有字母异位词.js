/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const result = []
    const window = Array(26).fill(0)
    let window1 = Array(26).fill(0)

    for (const pp of p) {
        window1[pp.charCodeAt() - 97]++
    }

    const isSame = (a, b) => {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false
        }
        return true
    }

    for (let i = 0; i < s.length; i++) {
        window[s[i].charCodeAt() - 97]++

        if (i < p.length - 1) {
            continue
        }


        if (isSame(window, window1)) {
            result.push(i - p.length + 1)
        }

        window[s[i - p.length + 1].charCodeAt() - 97]--
    }

    return result
};

console.log(findAnagrams('abab', 'ab'))
console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('baa', 'aa'))