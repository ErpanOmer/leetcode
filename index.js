const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 3000)
  })
}

function test() {
  list.forEach(async item => {
    console.log(await square(item))
    console.log('内部调用')
  })

  square(1)
  square(2)
  square(3)

  console.log(2)
}

test()

//
console.log(Promise.resolve() instanceof Promise)

console.log(Promise.resolve().constructor === Promise)

console.log('then' in Promise.resolve() || 'finally' in Promise.resolve())

console.log(Object.prototype.toString.call(Promise.resolve()) === '[object Promise]')
