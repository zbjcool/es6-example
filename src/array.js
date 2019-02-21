// 1. ...运算符将一个数组，变为参数序列
function push(array, ...items) {
  array.push(...items);
}

let array = [1,2];
push(array, 3, 4);
console.log(array);


function add(x, y) {
  return x + y;
}
const numbers = [2,3];
add(...numbers)

// 2. ...运算符和正常参数结合


function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

// 复制数组

const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]
// 只是复制了指针，修改a2就会a1

// es5中
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]

// es6
