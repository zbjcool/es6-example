let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};


// JavaScript 定义对象的属性，有两种方法。

// 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;
// 上面代码的方法一是直接用标识符作为属性名，方法二是用表达式作为属性名，这时要将表达式放在方括号之内。

// 但是，如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。

var obj = {
  foo: true,
  abc: 123
};
// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};


// 对象的解构赋值
/**  
 * 注意，解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、
 * 那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
*/
let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2;
x.a.b // 2

// 对象的拷贝

let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }


// 对象的合并
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);


// Object.is  相当于===

// Object.assign

//（1）为对象添加属性

class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}

// 其实也可以些成
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


//（2）为对象添加方法

Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};