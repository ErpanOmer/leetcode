// 执行用时：84 ms
// 内存消耗：33.7 MB
//
//
//
//  方向数组默认值 direction
// right: true,
// down: false,
// left: false,
// up: false


var spiralOrder = function(matrix) {
  const m = matrix.length   //  行数
  const nums = []

  if (m < 1) {
    return nums
  }

  const n = matrix[m - 1].length   //  列数
  let length = n * m
  let row = 0
  let column = 0

  //  重置方向
  const direction = [true, false, false, false]
  const resetDirection = key => {
    for (let i = 0; i < 4; i++) {
      direction[i] = i === key
    }
  }

  while (length) {
    length--
    nums.push(matrix[row][column])
    matrix[row][column] = null

    // 如果是向右
    if (direction[0]) {
      if (!matrix[row][column + 1]) {
        resetDirection(1)
        row++
        continue
      }
      column++
    }

    // 如果是向下
    if (direction[1]) {
      if (!(matrix[row + 1] && matrix[row + 1][column])) {
        resetDirection(2)
        column--
        continue
      }
      row++
    }

    //  如果是向左
    if (direction[2]) {
      if (!matrix[row][column - 1]) {
        resetDirection(3)
        row--
        continue
      }

      column--
    }

    // 如果是向上
    if (direction[3]) {
      if (!matrix[row - 1][column]) {
        resetDirection(0)
        column++
        continue
      }

      row--
    }
  }

  return nums
};

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]))
