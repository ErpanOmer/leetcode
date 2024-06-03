/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力递归 + 记忆化搜索
var lengthOfLIS = function(nums) {
    let count = 0
    const map = new Map()

    const dfs = (index = 0, count = 0) => {
        if (map.has(index)) {
            return map.get(index)
        }

        for (let i = index; i < nums.length; i++) {
            if (nums[i] > nums[index]) {
                count = Math.max(dfs(i), count)
            }
        }

        
        return map.set(index, count + 1).get(index)
    }

    for (let i = 0; i < nums.length; i++) {
        if (count > nums.length - i) {
            return count
        }

        count = Math.max(dfs(i), count)
    }

    return count
};


// dp ?
var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[j] = Math.max(dp[i] + 1, dp[j])
            }
        }
    }

    return Math.max(...dp)
};


// 桶排序 + 二分查找  => 耐心排序
var lengthOfLIS = function(nums) {
    const top = []

    for (const n of nums) {
        let i = 0
        let j = top.length

        while(i < j) {
            const m = (i + j) >> 1

            if (n > top[m]) {
                i = m + 1
            } else {
                j = m
            }
        }

        top[i] = n
    }

    return top.length
};


console.log(lengthOfLIS([7,7,7,7,7,7,7]))