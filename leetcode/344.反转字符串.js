// 执行用时：128 ms
// 内存消耗：46.5 MB

var reverseString = function(s) {
  let length = s.length
  let loop = Math.ceil(length / 2)
  const ou = length % 2 === 0

  while (loop) {
    if (loop === 1 && !ou) {
      return s
    }

    const len = s.length - length
    loop--
    length--

    const temp = s[len]
    s[len] = s[length]
    s[length] = temp
  }

  return s
};

console.log(reverseString(["h","e","l","r", "o"]))
