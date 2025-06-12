/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let times = Array(nums.length).fill(nums[0]);
    let timess = Array(nums.length).fill(nums[nums.length - 1]);
    const result = []

    for (let i = 1; i < nums.length; i++) {    
        times[i] = nums[i] * times[i - 1]    
    }

    for (let i = nums.length - 2; i >= 0; i--) { 
        timess[i] = nums[i] * timess[i + 1]    
    }

    console.log(times)
    console.log(timess)

    return result
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]))