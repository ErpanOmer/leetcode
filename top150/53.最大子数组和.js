/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i])
        sum = Math.max(sum, max)

        console.log(max, sum)
    }

    return sum
};


console.log(maxSubArray([5,4,-1,7,8]))