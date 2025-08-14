/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const result = []

    if (digits === '') {
        return result
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
    const backtrack = (index = 0, string = '') => {
        if (string.length === digits.length) {
            return result.push(string)
        }

        for (let ch of map[digits[index]]) {
            backtrack(index + 1, string + ch)
        }


    }

    backtrack()

    return result
};


console.log(letterCombinations('234'))