// 1.属性名为变量名, 属性值为变量的值
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

console.log(1, baz.foo);

// 等同于
// const baz = {foo: foo};

function f(x, y) {
  return {x, y};
}

// 等同于

function f(x, y) {
  return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}


// 除了属性简写，方法也可以简写。

const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};