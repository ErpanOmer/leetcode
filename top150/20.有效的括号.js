/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    const left = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stak = []

    for (const s of string) {
        if (left[s]) {
            stak.push(left[s])
            continue
        }

        if (stak.pop() !== s) {
            return false
        }
    }

    return stak.length === 0
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('])))))'))