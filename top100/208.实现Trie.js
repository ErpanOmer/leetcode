var Trie = function () {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let temp = this.trie
    let t = temp

    for (const w of word) {
        if (!t[w]) {
            t = t[w] = {}
        } else {
            t = t[w]
        }
    }

    t.end = true

    return true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let temp = this.trie
    let t = temp
    let i = 0

    while (i < word.length) {
        if (!t[word[i]]) {
            return false
        }

        t = t[word[i]]

        i++
    }
    
    return !!t.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let temp = this.trie
    let t = temp
    let i = 0

    while (i < prefix.length) {
        if (!t[prefix[i]]) {
            return false
        }

        t = t[prefix[i]]

        i++
    }

    return true
};

const trie = new Trie();
trie.insert("apple");
trie.search("apple"); // 返回 True
trie.search("app"); // 返回 False
trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True