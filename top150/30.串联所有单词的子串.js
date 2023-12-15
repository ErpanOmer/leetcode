/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const count = {}
    const indexes = []
    const wLen = words[0].length
    const wordLen = words.length * wLen
    let length = words.length

    const equal = target => {
        for (const k in count) {
            if (count[k] !== target[k]) {
                return false
            }
        }

        return true
    }

    for (const w of words) {
        count[w] =  !count[w] ? 1 : ++count[w]
    }

    for (let i = 0, j = wordLen - 1; j < s.length; j++, i++) {
        const m ={}
        let l = length

        while(l--) {
            const string = s.substring(l * wLen + i, (l + 1) * wLen + i)

            if (!count[string]) {
                break;
            }

            m[string] = !m[string] ? 1 : ++m[string]
        }

        l === -1 && equal(m) && indexes.push(i)
    }

    return indexes
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))