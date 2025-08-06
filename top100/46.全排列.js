/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const visited = new Set()

    const backtrack = (path = []) => {

        if (path.length === nums.length) {
            return result.push(path.slice(0))
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.has(i)) {
                continue
            }

            path.push(nums[i])
            visited.add(i)

            console.log(i, path)

            backtrack(path)

            path.pop()
            visited.delete(i)
        }

    }


    backtrack()

    return result
};


console.log(permute([1,2,3]))