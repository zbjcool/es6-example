// 每一个 Symbol 值都是不相等的

let symbol = Symbol('aass');
console.log(typeof symbol);
console.log(symbol);
console.log(symbol.toString());


// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

log(s1 === s2) // false

// 有参数的情况
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');

// console.log(s1 === s2) // false


// 作为属性值

let mySymbol = Symbol();

// 第一种写法
let a = {};
a[llySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"


// 不能用点运算符
// a.mySymbol = 'hello';