/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1
    let b = 2

    while(n-- > 2) {
        b = a + b
        a = b - a
    }

    return b
};

console.log(climbStairs(1))