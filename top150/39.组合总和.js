/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const array = []
    // candidates.sort((a, b) => a - b)

    const fn = (target, index = 0, arr = []) => {
        if (target <= 0) {
            return target < 0 ? array : array.push(arr.slice())
        }

        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i])
            fn(target - candidates[i], i, arr)
            arr.pop()
        }

        return array
    }

    return fn(target)
};


console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15))