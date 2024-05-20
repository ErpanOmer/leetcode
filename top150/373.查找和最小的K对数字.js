/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let i = 0
    let j = 0
    let max = Number.MAX_SAFE_INTEGER
    const result = []
    const set = {}

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const index = nums1[i] + nums2[j] + 2000000000
            if (set[index]) {
                set[index].push([nums1[i], nums2[j]])
            } else {
                set[index] = [[nums1[i], nums2[j]]]
            }
        }
    }

    // console.log(set)

    for (const key in set) {
        const arr = set[key]
        k = k - arr.length

        if (k >= 0) {
            result.push(...arr)
        } else {
            result.push(...arr.slice(0, k + arr.length))

            return result
        }
    }

    return result
};


console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100], 10))