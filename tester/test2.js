// Promise.reject(10)
// .then(x => {
//   console.log('x', x)
//   return 20
// })
// .catch(e => {
//   console.log('e1', e)
//   return e
// }).then((x, e) => {
//   console.log('x1', x)
//   console.log('e2', e)
//   return x
// }).catch(e => {
//   console.log('e3', e)
//   return e
// }).catch(e => {
//   console.log('e4', e)
//   return 30
// }).then((x, e) => {
//   console.log('x2', x)
//   console.log('e5', e)
//   throw '404'
//   return 40
// }).catch(e => {
//   console.log('e6', e)
//   return e
// }).then(x => {
//   console.log('x3', x)
// })
//

p = Promise.reject(10)
const a = p.catch(e => console.log(e))
console.log(a)
const b = p.then(x => console.log(x), e => console.log(e))
console.log(b)

// 总结就是： 1.then 回调函数的 return值 是下一个then的回调函数的参数
//           2.catch 回调函数的 return值 是也是下一个then的回调函数的参数，不是下一个catch的回调函数的参数
//           3.then 里面有抛出异常，默认忽略return, 直接走catch
