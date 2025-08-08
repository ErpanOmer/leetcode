/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const result = []

    const backtrack = (index = 0, arr = []) => {
        result.push([...arr])

        for (let i = index; i < nums.length; i++) {
            arr.push(nums[i])
            backtrack(i + 1, arr)
            arr.pop()
        }
    }

    backtrack()

    return result
};

console.log(subsets([1, 2, 3]))