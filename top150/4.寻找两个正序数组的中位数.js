/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const temp = []
    let i = 0
    let j = 0;

    for (;i < nums1.length && j < nums2.length;) {
        temp.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++])            
    }

    while(i < nums1.length) {
        temp.push(nums1[i++])
    }

    while(j < nums2.length) {
        temp.push(nums2[j++])
    }

    const m = Math.floor(temp.length / 2)

    return temp.length % 2 === 0 ? (temp[m] + temp[m - 1]) / 2 : temp[m]
};

console.log(findMedianSortedArrays([1,3], [2, 4]))