/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const arrayy = []

    const fn = (index = 0) => {
        if (index === nums.length) {
            return arrayy.push(nums.slice())
        }

        for (let i = index; i < nums.length; i++) {
            // 交换
            if (nums[i] !== nums[index]) {
                const t = nums[i]
                nums[i] = nums[index]
                nums[index] = t
            }

            fn(index + 1)

            // 恢复
            if (nums[i] !== nums[index]) {
                const t = nums[i]
                nums[i] = nums[index]
                nums[index] = t
            }
        }

        return arrayy
    }

    return fn()
};

console.log(permute([1, 2, 3]))