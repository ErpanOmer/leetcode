// 1.node 环境
// 有 var 声明
//
var w = 10
console.log(w)    //  10
console.log(global.w)   // undefined
console.log(global.hasOwnProperty('w'))   // false

// 没有var 声明
//
c = 20
console.log(c)    //  20
console.log(global.c)  //  20
console.log(global.hasOwnProperty('c'))   //  true


// 2.浏览器环境
// 有 var 声明
//
var w = 10
console.log(w)    //  10
console.log(window.w)   // 10
console.log(window.hasOwnProperty('w'))   // true

// 没有var 声明
//
c = 20
console.log(c)    //  20
console.log(window.c)  //  20
console.log(window.hasOwnProperty('c'))   //  true
