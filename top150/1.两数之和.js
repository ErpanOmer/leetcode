/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return [map[nums[i]], i]
        }

        map[target - nums[i]] = i
    }

    console.log(map)
};



// 时间复杂度：O(n)
// 空间复杂度：O(n)

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))