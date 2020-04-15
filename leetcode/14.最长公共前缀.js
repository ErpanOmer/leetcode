// 执行用时：76 ms
// 内存消耗：35.2 MB
//
// var longestCommonPrefix = function(strs) {
//   const length = strs.length
//   if (length < 1) {
//     return ''
//   }
//
//   let i, j
//   let current = strs[0]
//
//   for (i = 1; i < length; i++) {
//     for (j = 0; j < current.length; j++) {
//       if (current[j] !== strs[i][j]) {
//         break
//       }
//     }
//
//     if (j === 0) {
//       return ''
//     }
//
//     current = current.substr(0, j)
//   }
//
//   return current
// };


// 执行用时：60 ms
// 内存消耗：33.5 MB


var longestCommonPrefix = function(strs) {
  if (strs.length < 1) {
    return ''
  }

  strs = strs.sort()
  const start = strs.shift()
  const end = strs.pop()

  if (!end || end.indexOf(start) === 0) {
    return start
  }

  for (let i = 0; i < start.length; i++) {
    if (start[i] !== end[i]) {
      return start.substring(0, i)
    }
  }
};


//  可以用sott
console.log(longestCommonPrefix(['a']))
