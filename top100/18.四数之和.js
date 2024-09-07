/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (nums[j - 1] === nums[j] && (j - i > 1)) {
                continue
            }

            let k = j + 1
            let l = nums.length - 1

            while(k < l) {
                const t = nums[i] + nums[j] + nums[k] + nums[l]

                if (t === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                    
                    while(k < l && nums[l] === nums[--l]){}
                    while(k < l && nums[k] === nums[++k]){}
                } else if (t > target) {
                    while(k < l && nums[l] === nums[--l]){}
                } else {
                    while(k < l && nums[k] === nums[++k]){}
                }
            }
        }        
    }


    return result
};


console.log(fourSum([0,4,-5,2,-2,4,2,-1,4], 12))
console.log(fourSum([2,2,2,2, 2], 8))
console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9))