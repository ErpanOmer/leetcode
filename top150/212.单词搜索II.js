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

var findWords = function(board, words) {
    const tree = new Trie()
    const set = new Set()
    const length = board.length * board[0].length

    for (const word of words) {
        if (word.length <= length) {
            tree.insert(word)
        }
    }

    const dfs = (i, j, current, string = '') => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || !current || !current[board[i][j]] || board[i][j] === "#") {
            return
        }

        const char = board[i][j]
        string += char

        if (current[char].isWord) {
            set.add(string)
            current[char].isWord = false
        }

        board[i][j] = '#'

        dfs(i - 1, j, current[char], string)
        dfs(i + 1, j, current[char], string)
        dfs(i, j - 1, current[char], string)
        dfs(i, j + 1, current[char], string)
        
        board[i][j] = char
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (tree.root[board[i][j]] && set.size < words.length) {
                dfs(i, j, tree.root)
            }
        }
    }

    return Array.from(set).sort()
};

console.log(findWords([["a","b"],["a","a"]], ["aba","baa","bab","aaab","aaa","aaaa","aaba"]))
