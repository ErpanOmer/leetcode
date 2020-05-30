function quickSort (arr) {
  const length = arr.length

  if (length <= 1) {
    return arr
  }

  const left = []
  const right = []
  const middle = arr.pop()

  for (let i = 0; i < arr.length; i++) {
    arr[i] > middle ? right.push(arr[i]) : left.push(arr[i])
  }

  return [...quickSort(left), middle, ...quickSort(right)]
}

console.log(quickSort([1, 8, 9, 4, 5, 9]))
