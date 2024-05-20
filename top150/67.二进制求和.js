/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let length = Math.max(a.length, b.length)
    a = a.padStart(length, '0')
    b = b.padStart(length, '0')
    let result = ''
    let er = 0

    while(length--) {
        const n = Number(a[length]) + Number(b[length]) + er
        result = `${n % 2}` + result
        er = n >= 2 ? 1 : 0        
    }

    if (er > 0) {
        result = '1' + result
    }

    return result
};

console.log(addBinary('11', '1'))