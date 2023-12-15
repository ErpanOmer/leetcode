/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 0, j = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i]

        while (sum >= target) {
            min = Math.min(min, i - j + 1)
            sum -= nums[j++]
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]))