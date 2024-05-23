/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let rev = 0
    let length = 32

    while(length--) {
        rev = (rev << 1) | (n & 1)
        n >>= 1
    }

    return rev >>> 0
};


console.log(reverseBits(0b11111111111111111111111111111101))