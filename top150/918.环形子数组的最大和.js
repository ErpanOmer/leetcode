/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let max = nums[0]
    let min = nums[0]
    let maxSum = nums[0]
    let minSum = nums[0]
    let total = nums[0]

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], nums[i] + max)
        min = Math.min(nums[i], nums[i] + min)
        maxSum = Math.max(max, maxSum)
        minSum = Math.min(min, minSum)

        total += nums[i]
    }

    return minSum === total ? maxSum : Math.max(maxSum, total - minSum)
}


console.log(maxSubarraySumCircular([3,-1,2,-1]))