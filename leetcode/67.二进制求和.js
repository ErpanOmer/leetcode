// 执行用时：64 ms
// 内存消耗：36.7 MB

var addBinary = function(a, b) {
  let length = a.length > b.length ? a.length : b.length
  let binary = ''

  while (length) {
    length--

    if (a[length] === undefined) {
      a = '0' + a
      length++
      continue
    }

    if (b[length] === undefined) {
      b = '0' + b
      length++
      continue
    }

    let plus = +a[length] + +b[length]

    if (plus > 1) {
      binary = (plus % 2) + binary
      if (length === 0) {
        binary = '1' + binary
        break
      }

      const start = a.substring(0, length - 1)
      const middle = ++a[length - 1]
      const end = a.substr(length, length)

      a = start + middle + end
      continue
    }

    binary = plus + binary
  }

  return binary
};


// 执行用时：76 ms
// 内存消耗：35.1 MB
var addBinary = function(a, b) {
  let length = a.length > b.length ? a.length : b.length
  a = a.padStart(length, '0').split('').map(Number)
  b = b.padStart(length, '0').split('').map(Number)

  while (length) {
    let plus = a[--length] + b[length]

    if (plus > 1) {
      a[length] = plus % 2
      if (length === 0) {
        a.unshift(1)
        break
      }

      a[length - 1]++
      continue
    }

    a[length] = plus
  }

  return a.join('')
};

console.log(addBinary('111', '1110'))
