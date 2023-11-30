/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false
        }
        
        max = Math.max(max, i + nums[i])
    }

    return true
};


// 贪心算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([4,2,0,0,1,1,4,4,4,0,4,0]))