// 执行用时：80 ms
// 内存消耗：33.8 MB

var getRow = function(rowIndex) {
  matrix = [[1]]

  if (rowIndex > 0) {
    matrix.push([1, 1])
  }

  const fn = (layer, prv) => {
    const arr = [1]
    for (let i = 1; i < layer; i++) {
      arr[i] = prv[i - 1] + prv[i]
    }

    arr.push(1)
    return arr
  }

  for (let i = 1; i < rowIndex; i++) {
    matrix.push(fn(i + 1, matrix[i]))
  }

  return matrix[rowIndex]
};

console.log(getRow(7))

// 执行用时：68 ms
// 内存消耗：35.6 MB

var getRow = function(rowIndex) {
  let matrix

  if (rowIndex > -1) {
    matrix = [1]
  }

  if (rowIndex > 0) {
    matrix = [1, 1]
  }

  for (let i = 1; i < rowIndex; i++) {
    let arr = [1]

    for (let j = 1; j < i + 1; j++) {
      arr[j] = matrix[j - 1] + matrix[j]
    }

    matrix = [...arr, 1]
  }

  return matrix
};

console.log(getRow(2))
