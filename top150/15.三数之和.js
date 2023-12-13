/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arr = []
    nums.sort((a, b) => a - b)

    for (let m = 0; m < nums.length; m++) {
        let i = m + 1
        let j = nums.length - 1

        if (nums[m] > 0) {
            break
        }

        if (m > 0 && nums[m] === nums[m - 1]) {
            continue
        }

        while (i < j) {
            const sum = nums[i] + nums[m] + nums[j]
    
            if (sum === 0) {
                arr.push([nums[i], nums[m], nums[j]])
                i++
                j--

                while(i < j && nums[i - 1] === nums[i]) {
                    i++
                }

                while(i < j && nums[j + 1] === nums[j]) {
                    j--
                }
            }
    
            if (sum > 0) {
                j--

                while(i < j && nums[j + 1] === nums[j]) {
                    j--
                }
            }
    
            if (sum < 0) {
                i++

                while(i < j && nums[i - 1] === nums[i]) {
                    i++
                }
            }
        }
        
    }

    return arr
};

// 时间复杂度：O(N2)
// 空间复杂度：O(1)


console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]))