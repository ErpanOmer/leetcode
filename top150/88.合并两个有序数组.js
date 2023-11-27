/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i =  m + n;

    while(i-- && n > 0) {
        if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
            nums1[i] = nums1[m - 1]
            m--   
        } else {
            nums1[i] = nums2[n - 1]
            n--
        }
    }
};

// 时间复杂度：O(m + n)
// 空间复杂度：O(1)


// 测试用例
const test1 = [1,2,3,0,0,0]
const test2 = [1]
const test3 = [0]

merge(test1, 3, [2,5,6], 3)
merge(test2, 1, [], 0)
merge(test3, 0, [1], 1)

console.log(test1)
console.log(test2)
console.log(test3)
