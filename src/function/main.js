import fuc from './export-function'
import overide from './overide'

// 函数的定义
function fuc() {

}

// 函数表达式
// 函数表达式可以有名字，也可以没有名字
var foo = function (){}


var foo = function bar(){

}
foo()// 成功
bar() // 不成功
// 如果有名称，函数的名称将会成为函数内部的一个局部变量, 可以用来递归
var foo = function bar(n){
  console.log(n)
  if (n === 0) {
    return 0
  }
  bar(--n)
}

foo(3) // 3 2 1 0

// 内联函数
function foo(a) {
  let b = a + 2;
  function bar(x) {
    return x * x;
  }
  // return bar(a);
  return bar(b);
}
foo(2);// 16
// bar可以读取foo的局部变量a,b

// 函数的调用
// 函数定义的时候不会调用
// 1.函数调用 2. 对象方法调用 3. 构造函数调用 4.call和apply 5.（我加的）立即执行函数





fuc.say();
console.log(fuc.info)
// module.fuc.name()


// for (var i=0; i< 3; i++) {
//   for (var i=0; i< 7; i++) {
//     console.log(i)    
//   } 
// }

var Permission = {

  hasPermission: function(resId) {
    if (resId) {
      if (!Permission.hasPvg(resId)) {
        return false
      }
      return true
    } else {
      console.error(`need resId"`)
      return false
    }
  },
  _hasPvg: function (resId) {
    const myPermissions = weexStorage.getItem('sqlink_curUserPermission');
    return myPermissions[resId]
  }
}

function CoolModule() {
  var something = 'cool';
  function doSomething() {
    console.log(something);
  }
  return {
    doSomething
  }
}

var module = CoolModule();
module.doSomething();

/** overide */
