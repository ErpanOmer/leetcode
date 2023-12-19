/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false
    }

    const count = {}

    for (const s of magazine) {
        count[s] = !count[s] ? 1 : ++count[s]
    }


    for (const s of ransomNote) {
        if (count[s] === undefined || --count[s] < 0) {
            return false
        }
    }


    return true
};


console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))