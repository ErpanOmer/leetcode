/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1])

    let count = 0
    let length = 0

    while(length < points.length) {
        let temp = points[length][1]

        while (points[length + 1] && temp >= points[length + 1][0]) {
            length++
        }

        length++
        count++
    }

    return count
};

// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))