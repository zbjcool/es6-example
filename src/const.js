// ES5 中常量的写法

Object.defineProperty(window, "PI2", {
    value: 3.1415926,
    writable: false,
})

console.log(PI2)
console.log(window.PI2)
PI2 = 3.14
// console.log(PI2)
// Cannot assign to read only property 'PI2' of object
console.log(window.PI2)


// ES6 的常量写法

const PI = 3.1415926
console.log(PI)
console.log('tgestd')

// PI = 4

//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
// 因此，将一个对象声明为常量必须非常小心。
/*
变量(内存地址) --> 存储数据的区域(不能变)
*/

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错

// 如果真的想将对象冻结，应该使用Object.freeze方法。



// ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，
// 后面章节还会提到，另外两种声明变量的方法：import命令和class命令。
// 所以，ES6 一共有 6 种声明变量的方法。