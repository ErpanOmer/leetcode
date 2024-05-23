/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false
    }

    let sum = 0
    const xx = x

    while(x >= 1) {
        sum = Math.floor(sum * 10 + x % 10)
        x /= 10
    }

    return sum === xx
};

console.log(isPalindrome(1))
console.log(isPalindrome(121))