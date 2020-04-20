// 执行用时：260 ms
// 内存消耗：35.7 MB

var minSubArrayLen = function(s, nums) {
  let length = nums.length
  let disparity = Number.MAX_SAFE_INTEGER
  let i = 0
  let sum = 0

  while (length) {
    i = --length
    sum = 0

    while (s > sum && i > -1) {
      sum += nums[i--]
    }

    disparity = sum >= s ? Math.min(disparity, length - i) : disparity
  }

  return disparity === Number.MAX_SAFE_INTEGER ? 0 : disparity
};


// 执行用时：64 ms
// 内存消耗：35.7 MB
var minSubArrayLen = function(s, nums) {
    let L=0, R = 0, minLen = Infinity, sum = 0
    while(R < nums.length){
        sum += nums[R++]
        while(sum >= s){
            minLen = Math.min(minLen, R - L + 1)
            sum -= nums[L++]
        }
    }
    if(minLen == Infinity) return 0
    return minLen - 1
};

console.log(minSubArrayLen(15, [1,2,3,4,5]))
