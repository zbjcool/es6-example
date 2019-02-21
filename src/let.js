// import { strict } from "assert";

'use strict'
// 1.let 声明的变量只在let命令所在的代码块中有效
{
  let a = 10;
  var b = 20;
}
// 或者
if(true) {
  let a = 10;
  var b = 20;
}
// a is not defined
// console.log(a);
// b is 20
console.log(`1: ${b}`);

// 2.let 很适合在for循环中使用

for (let i = 0; i < 10; i++) {
}
// let 定义的变量只能在块作用域中使用
// i is not defined
// console.log(i);

for (var j = 0; j < 10; j++) {
}
// j is 10
console.log(`2: ${j}`);


// 3.var 定义的变量是全局变量,指向同一个地方
var v1 = 10;
{
  // 编译器会忽略var，执行v1 = 20;
  var v1 = 20;
}
console.log(`3: ${v1}`);


// let 不能重复定义
let l1 = 10;
// let l1 = 20;
console.log(`3: ${l1}`);


// 4.注意i是全局变量
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(`4: ${i}`);
  };
}
a[6](); // 10

// 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
// JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(`4: ${i}`);
  };
}
a[6](); // 6
// 相当于
{
  let j;
  for (j = 0; j < 10; j++) {
    let i = j; 
    a[i] = function () {
      console.log(`4: ${i}`);
    };
  }
}
// 如果
{
  let j;
  for (j = 0; j < 10; j++) {
    a[j] = function () {
      console.log(`4: ${j}`);
    };
  }
}
a[6]();// 10
// 5 for循环内的每一次循环是一个新的变量，这里不是，所以打印相同的值
var a = [];
let k = 0;
a[k] = function () {
  console.log(`5: ${k}`);
};

k++;
a[k] = function () {
  console.log(`5: ${k}`);
};
a[0]() // 1
a[1]() // 1

// 6. 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(`6: ${i}`);
}

// 不存在变量提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

// 暂时性死区
// 这里不报错是因为babel转化的时候
// 加了一句var tmp = void 0;
// 只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，
// 定义后在使用变量，let定义的变量不存在变量提升
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}


// IIFE 写法
(function () {
  var tmp = 1;
}());
console.log(temp)

// 块级作用域写法
{
  let tmp = 1; 
}
console.log(temp)

// 块级的作用域内的函数应该写成函数表达式，而不是函数声明语句。
// 函数声明语句
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}


// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// f is not a function

// 实际执行
function f() { console.log('I am outside!'); }
(function () {
  var f = undefined;
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }
  f();
}());

// 改成函数表达式

let f = function () { console.log('I am outside!'); }
if (false) {
  // 重复声明一次函数f
  let f = function() { console.log('I am inside!'); }
}
f(); // I am outside!

// 或者
var f = function () { console.log('I am outside!'); }
{
  if (false) {
    // 重复声明一次函数f
    let f = function() { console.log('I am inside!'); }
  }
  f(); // I am outside!
}

// 顶层对象的属性
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
//var命令和function命令声明的全局变量，依旧是顶层对象的属性；
//另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
// 也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。


// 作用域提升
a = 2
var a;
console.log(a)
// 2

console.log(b)
var b = 10
console.log(b)
// undefined
// 10

