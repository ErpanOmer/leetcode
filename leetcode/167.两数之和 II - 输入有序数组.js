var twoSum = function(numbers, target) {
  let loop = numbers.length
  const cache = {}

  while(loop--) {
    let sub = target - numbers[loop]

    if (cache[numbers[loop]]) {
      return [loop + 1, cache[numbers[loop]] + 1]
    }

    cache[sub] = loop
  }

  return []
};

console.log(twoSum([2, 7, 11, 15], 9))
