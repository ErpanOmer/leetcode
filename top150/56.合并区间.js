/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let i = -1
    const arr = []
    intervals.sort((a, b) => a[0] - b[0])

    while(++i < intervals.length) {
        let start = intervals[i][0]
        let large = intervals[i][1]

        while(intervals[i + 1] && (large >= intervals[i + 1][0])) {
            large = Math.max(large, intervals[i + 1][1])
            i++
        }

        arr.push([start, large])
    }


    return arr
};

// 分段循环
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)


console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[0,4]]))
console.log(merge([[1,4],[2,3]]))
console.log(merge([[2,3],[4,5],[6,7],[10,20],[1,10]]))