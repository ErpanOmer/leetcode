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

var subsets = function(nums) {
    const t = [];
    const ans = [];
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop(t.length - 1);
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
};

console.log(subsets([1, 2, 3]))