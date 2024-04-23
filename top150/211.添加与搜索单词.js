
var WordDictionary = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word, start = this.root) {
    // console.log(word)
    let current = start

    for (let i = 0; i < word.length; i++) {
        if (word[i] === '.') {
            for (const c in current) {
                if (this.search(c + word.substring(i + 1), current)) {
                    return true
                }
            }

            return false
        }

        if (!current[word[i]]) {
            return false
        }

        current = current[word[i]]
        
    }

    return current.isWord !== undefined
};

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search('pad'))
console.log(wordDictionary.search('bad'))
console.log(wordDictionary.search('.ad'))
console.log(wordDictionary.search('b..'))