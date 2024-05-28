/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dp
var coinChange = function(coins, amount) {
    const dp = [0]

    for (let i = 1; i <= amount; i++) {
        let min = Number.MAX_SAFE_INTEGER
        
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && dp[i - coins[j]] < min) {
                min = dp[i - coins[j]] + 1
            }            
        }

        dp[i] = min
    }

    return dp[amount] == Number.MAX_SAFE_INTEGER ? - 1 : dp[amount]
};

//回溯暴力破解
var coinChange = function(coins, amount) {
    const min = Math.min(...coins)
    let i = 0
    let map = new Set()
    let count = Number.MAX_SAFE_INTEGER

    const dfs = (amount, i = 0) => {
        if (amount === 0) {
            return count = Math.min(i, count)
        }

        const k = `${amount}-${i}`
        if (map.has(k)) {
            return
        }

        map.add(k)

        for (const iterator of coins) {
            if (amount >= iterator) {
                dfs(amount - iterator, i + 1)
            }
        }
    }

    dfs(amount)

    return count === Number.MAX_SAFE_INTEGER ? -1 : count
};


console.time('s')
console.log(coinChange([3,7,405,436], 8839))
console.timeEnd('s')