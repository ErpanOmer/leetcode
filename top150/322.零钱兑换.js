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

        for (const coin of coins) {
            if (i >= coin && dp[i - coin] < min) {
                min = dp[i - coin]
            }
        }

        dp[i] = min
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? - 1 : dp[amount]
};

//回溯暴力破解
// var coinChange = function(coins, amount) {
//     const min = Math.min(...coins)
//     let i = 0
//     let map = new Set()
//     let count = Number.MAX_SAFE_INTEGER

//     const dfs = (amount, i = 0) => {
//         const k = `${amount}-${i}`
//         if (map.has(k)) {
//             return Number.MAX_SAFE_INTEGER
//         }

//         map.add(k)

//         for (const iterator of coins) {
//             if (amount >= iterator) {
//                 const j = amount - iterator === 0 ? i + 1 : dfs(amount - iterator, i + 1)
//                 if (j < count) {
//                     count = j
//                 }
//             }
//         }

//         return count
//     }

//     dfs(amount)

//     return count === Number.MAX_SAFE_INTEGER ? -1 : count
// };


console.time('s')
console.log(coinChange([2], 1))
console.timeEnd('s')