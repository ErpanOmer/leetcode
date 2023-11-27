/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            max = nums[i]
        }

        count += max === nums[i] ? 1 : -1
    }

    return max
};


// 投票算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
