// 执行用时：52 ms
// 内存消耗：34.9 MB

var stringMatching = function(words) {
  return words.filter(variable => words.some(item => (variable !== item) && (item.indexOf(variable) > -1)))
};

console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
