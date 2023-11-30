/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0
    let max = 0
    let end = 0

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i] + i)

        if (i === end) {
            end = max

            step++
        }
    }

    return step
};

// 贪心算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(jump([2,3,0,1,4]))
console.log(jump([2,3,1,1,4]))
console.log(jump([1,1,1,1]))
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]))