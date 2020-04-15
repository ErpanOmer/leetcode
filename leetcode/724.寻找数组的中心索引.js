//  time: 1120ms
//  memory: 33.7MB

var pivotIndex = function(nums) {
  const length = nums.length
  const left = []
  const right = nums.slice(1)
  let middle = nums[0]

  for (let i = 0; i < length; i++) {
    const l = left.reduce((prev, item) => prev += item, 0)
    const r = right.reduce((prev, item) =>  prev += item, 0)

    if (l === r) {
      return i
    }

    left.push(middle)
    middle = right.shift()
  }

  return -1
}

//  time: 84ms
//  memory: 33.7MB
//
var pivotIndex = function(nums) {
  let sum = nums.reduce((prev, item) => prev += item, 0)
  let temp = 0  // 0

  return nums.findIndex(item => {
    if ((sum - temp - item) === temp) {
      return true
    }

    temp += item
  })
}


console.log(pivotIndex([1,7,3,4,6,5,6]))
