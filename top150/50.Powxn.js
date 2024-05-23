/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let sum = 1

    if (n < 0) {
        x = 1 / x
        n = 0 - n
    }

    while(n) {
        if (n & 1) {
            sum *= x
        }

        n >>= 1  // n = Math.floor(n / 2)
        x *= x
    }

    return sum
};

console.log(myPow(2, 10))