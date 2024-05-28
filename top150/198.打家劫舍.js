/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const length = nums.length

    if (length < 2) {
        return nums[0]
    }

    const dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[dp.length - 1]
};


console.log(rob([2,7,9,3,1]))