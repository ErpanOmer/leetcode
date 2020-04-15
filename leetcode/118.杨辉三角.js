// 执行用时：56 ms
// 内存消耗：33.9 MB

var generate = function(numRows) {
  if (numRows < 1) {
    return []
  }

  const matrix = []
  const fn = (layer, prv) => {
    if (layer === 1) {
      return [1]
    }

    if (layer === 2) {
      return [1, 1]
    }

    const arr = [1]
    for (let i = 1; i < layer - 1; i++) {
      arr[i] = prv[i - 1] + prv[i]
    }

    arr.push(1)
    console.log(arr)
    return arr
  }

  for (let i = 0; i < numRows; i++) {
    matrix.push(fn(i+1, matrix[i - 1]))
  }

  return matrix
};

console.log(generate(5))
