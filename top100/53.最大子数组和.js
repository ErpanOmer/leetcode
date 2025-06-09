/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let current = nums[0]
    let max = current

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i])
        max = Math.max(current, max)
    }


    return max
};

console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))