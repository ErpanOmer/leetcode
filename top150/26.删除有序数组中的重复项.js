/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0

    for (let i = 0; i < nums.length;i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[left++] = nums[i]
        }
    }

    return left
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(removeDuplicates([1,1,2]))

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))