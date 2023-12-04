/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
        return s
    }

    const strings = new Array(numRows).fill('')
    let r = 0
    let c = 0

    for (let i = 0; i < s.length;) {
        if ((c % (numRows - 1)) === 0) {
            strings[r] += s[i++]
        } else {
            if (((r + c) % (numRows - 1)) === 0) {
                strings[r] += s[i++]
            }
        }

        r++

        if (r === numRows) {
            r = 0
            c++
        }
    }

    return strings.join('')
};



console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("A", 1))