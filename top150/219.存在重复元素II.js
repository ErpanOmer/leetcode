/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
            return true
        }

        map[nums[i]] = i      
    }

    return false
};

// 时间复杂度：O(n)
// 空间复杂度：O(n)

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([4,1,2,3,1,5], 3))