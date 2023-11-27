/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const k = 2
    let left = k

    for (let i = k; i < nums.length; i++) {        
        if (nums[left - k] !== nums[i]) {
            nums[left++] = nums[i]
        }
    }

    return left
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))