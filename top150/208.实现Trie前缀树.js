var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root

    for (const w of word) {
        if (!current[w]) {
            current[w] = {}
        }

        current = current[w]
    }

    current.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root

    for (const w of word) {
        if (!current[w]) {
            return false
        }

        current = current[w]
    }

    return current.isWord !== undefined
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root

    for (const p of prefix) {
        if (!current[p]) {
            return false
        }

        current = current[p]
    }

    return true
};


const t = new Trie()
t.insert('apple')
console.log(t.search('apple'))
console.log(t.search('app'))
console.log(t.startsWith('app'))
t.insert('app')
console.log(t.search('app'))