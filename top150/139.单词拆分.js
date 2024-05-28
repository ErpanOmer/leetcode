/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const tree = {}

    for (const word of wordDict) {
        let t = tree

        for (const w of word) {
            if (!t[w]) {
                t[w] = {}
            }

            t = t[w]
        }

        t.isWord = true
    }

    const dfs = (t, i = 0) => {
        if (i >= s.length - 1) {
            return !!t.isWord
        }

        if (!t[s[i]]) {
            return false
        }

        if (t[s[i]].isWord) {
            return true
        }

        const bool = []
        const temp = t

        for (let j = i + 1; j < s.length; j++) {
            bool.push(dfs(t[s[i]], j))
        }

        return bool.some(Boolean)
    }

    return dfs(tree)
};

// 暴力破解
var wordBreak = function(s, wordDict) {
    let length = s.length

    if (length < 2) {
        return wordDict.includes(s)
    }

    let strLength = Number.MAX_SAFE_INTEGER
    for (const w of wordDict) {
        strLength = Math.min(w.length, strLength)
    }

    if (length < strLength) {
        return false
    }

    let string = [true]

    for (let i = 0; i < length; i++) {
        if (length - i < strLength) {
            return !!string[length]
        }

        for (let j = i + strLength; j <= length; j++) {
            if (string[i] && wordDict.includes(s.substring(i, j))) {
                string[j] = true
            }         
        }
    }

    return !!string[length]
}


console.log(wordBreak("leetcode",["leet","code"]))