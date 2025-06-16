/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 简单易懂，算法真实目的
// 时间复杂度: 3n
// 空间复杂度: 3n
var productExceptSelf = function(nums) {
    let L = Array(nums.length).fill(1);
    let R = Array(nums.length).fill(1);
    const result = []

    for (let i = 1; i < nums.length; i++) {
        L[i] = L[i - 1] * nums[i - 1]        
    }

    for (let i = nums.length - 2; i >=0; i--) {
        R[i] = R[i + 1] * nums[i + 1]        
    }

    for (let i = 0; i < L.length; i++) {
        result.push(L[i] * R[i])        
    }

    return result
};


// 极限优化
// 时间复杂度: 2n
// 空间复杂度: n
var productExceptSelf = function(nums) {
    let R = Array(nums.length).fill(1);

    for (let i = nums.length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1]
    }

    let temp = 1

    for (let i = 0; i < nums.length; i++) {
        R[i] = R[i] * temp
        temp = nums[i] * temp
    }

    return R
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]))