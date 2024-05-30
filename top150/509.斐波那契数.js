/**
 * @param {number} n
 * @return {number}
 */

// dp 优化空间版
var fib = function(n) {
    let a = 0
    let b = 1

    while(n--) {
        b = a + b
        a = b - a
    }

    return a
};

// dp
var fib = function(n) {
    const dp = [0, 1, 1]

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]     
    }

    return dp[n]
};


console.log(fib(4))