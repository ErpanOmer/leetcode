/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const array = []

    if (!digits.length) {
        return array
    }

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const fn = (index = 0, string = '') => {
        if (index === digits.length) {
            return array.push(string)
        }

        for (const iterator of map[digits[index]]) {
            fn(index + 1, string + iterator)
        }

        return array
    }

    return fn()
};

console.log(letterCombinations('23'))