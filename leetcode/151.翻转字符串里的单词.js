// 执行用时：64 ms
// 内存消耗：35 MB

var reverseWords = function(s) {
  return s.split(' ').reverse().filter(Boolean).join(' ')
};

console.log(reverseWords("a good   example"))
