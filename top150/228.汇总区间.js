/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const arr = []

    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {

            if (i === j) {
                arr.push(String(nums[j]))
            } else {
                arr.push(nums[j] + '->' + nums[i])
            }
            
            j = i + 1
        }
    }

    return arr
};


// 双指针
// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))