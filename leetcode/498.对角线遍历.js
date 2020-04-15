// 执行用时：300 ms
// 内存消耗：58.3 MB

var findDiagonalOrder = function(matrix) {
  const m = matrix.length   //  行数

  if (m < 1) {
    return []
  }

  const n = matrix[m - 1].length   //  列数
  const nums = []
  let row = 0
  let column = 0


  for (let i = 0; i < m * n; i++) {
    nums.push(matrix[row][column])
    if (((row + column) % 2) === 0) {
      if (column === n - 1) {
        row++
        continue
      }

      if (row === 0) {
        column++
        continue
      }

      row--
      column++
    } else {
      if (row === m - 1) {
        column++
        continue
      }

      if (column === 0) {
        row++
        continue
      }

      column--
      row++
    }
  }

  return nums
};


function findDiagonalOrder (matrix) {
  const m = matrix.length   //  行数
  if (m < 1) {
    return []
  }

  const n = matrix[m - 1].length   //  列数
  const layer = m + n - 1

  const fn = layer => {
    const middle = Math.ceil(layer / 2)
    const nums = []
    for (let i = 0; i < layer; i++) {
      if (i > middle - 1) {
        nums.push(layer - i)
        continue
      }

      nums.push(i + 1)
    }

    return nums
  }

  const layerArr = fn(layer)

  const getInex = (layerIndex, whileLength) => {
    const row =
    console.log(layerIndex)
    for (let i = 0; i < whileLength; i++) {
      console.log(i)
    }
  }

  for (let i = 0; i < layer; i++) {
    console.log(getInex(i, layerArr[i]))
    break
  }
}

console.log(findDiagonalOrder([
 [ 1, 2, 3],
 [ 4, 5, 6],
 [ 7, 8, 9]
])
)
