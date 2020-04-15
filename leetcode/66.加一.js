// 执行用时：68 ms
// 内存消耗：34.1 MB

var plusOne = function (digits) {
  let length = digits.length

  while (length) {
    length--
    let plus = digits[length] + 1

    if (plus > 9) {
      digits[length] = 0

      if (length === 0) {
        digits.unshift(1)
        return digits
      }

      continue
    }

    digits[length] = plus
    return digits
  }
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))
