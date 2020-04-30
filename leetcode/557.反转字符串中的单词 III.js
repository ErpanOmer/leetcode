// 执行用时：92 ms
// 内存消耗：42.7 MB

var reverseWords = function(s) {
  s = s.split(' ')
  let length = s.length
  const arr = new Array(length)

  while(length--) {
    const current = s[length]
    const currentLength = current.length
    let str = ''

    for (let i = 0; i < currentLength; i++) {
      str = current[i] + str
    }

    arr[length] = str
  }

  return arr.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))
