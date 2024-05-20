/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0

    while(n) {
        count += n % 2
        n /= 2
    }

    return count
};

console.log(hammingWeight(11))