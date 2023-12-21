/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) {
        return 0
    }

    nums.sort((a, b) => a - b)
    let max = 1
    let j = 1

    for (let i = 1; i < nums.length; i++) {
        const s = nums[i] - nums[i - 1]

        if (s > 1) {
            j = 1
        }

        if (s === 1) {
            j++
        }
        
        max = Math.max(max, j)
    }

    return max
};

// 排序
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)


var longestConsecutive = function(nums) {
    if (!nums.length) {              
        return 0
    }

    const map = {}
    let max = 1

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            const left = map[nums[i] - 1] || 0
            const right = map[nums[i] + 1] || 0
            const length = 1 + left + right

            max = Math.max(max, length)

            map[nums[i]] = length
            map[nums[i] - left] = length
            map[nums[i] + right] = length
        }
    }

    return max
};

// 动态规划
// 时间复杂度：O(n)
// 空间复杂度：O(n)


console.log(longestConsecutive([100,4,101,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([1,2,0,1]))
console.log(longestConsecutive([0, 0, 0, 1]))