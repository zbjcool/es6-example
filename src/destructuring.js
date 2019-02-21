// 1. 为数组变量赋值

// 以前
let a = 1;
let b = 2;
let c = 3;
// es6
let [a,b,c] = [1,2,3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

// 只有这个位置的值为undefined，才不赋值
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null

// 默认值
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// 2. 为对象变量赋值,跟位置无关
let { foo, bar } = { bar: "bbb", foo: "aaa" };
foo // "aaa"
bar // "bbb"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'


let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined

// 3. 用途

// 交换变量
let x = 1;
let y = 2;

[x, y] = [y, x];

// 从函数返回多个值
// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();

//函数参数的定义
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

// 提取 JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

// 以前

let id = jsonData.id;
let status = jsonData.status;

// 默认函数参数

var a1 = function(a=1,b=2) {
  console.log(a + b)
}
a1() // 3;
a1(2, 3) // 5

var a1 = function({a=2,b=7}) {
  console.log(a + b)
}
a1({a:1,b:2}) // 3
a1({}) // 9
a1() // Cannot destructure property `a` of 'undefined' or 'null'

var a2 = function({a=2,b=7} = {}) {
  console.log(a + b)
}
a2() // 9
// 避免了在函数体内部再写var foo = config.foo || 'default foo';