/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = []

    const backtrack = (index = 0, arr = [], sum = 0) => {
        if (sum > target) {
            return
        }

        if (sum === target) {
            return result.push([...arr])
        }

        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i])
            backtrack(i, arr, sum + candidates[i])
            arr.pop()
        }

    }

    backtrack()

    return result
};


console.log(combinationSum([2, 3, 6, 7], 7))