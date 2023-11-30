/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length
    const L = [1]

    for (let i = 1; i < length; i++) {
        L[i] = L[i - 1] * nums[i - 1]
    }

    let temp = 1

    while(length--) {
        L[length] = temp * L[length]
        temp = nums[length] * temp
    }

    return L
};



// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))