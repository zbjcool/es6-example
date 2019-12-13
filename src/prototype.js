// 1
// Persion是函数，Persion在new调用的时候变成构造函数
// persion.prototype只有constructor和指向Object.prototype的__proto__
function Persion (name) {
  this.name = name;
  this.showName = function () {
    console.log(this.name);
  }
}

// me有name和showName成员变量
var me = new Persion('zbj');
me.showName();

// 2
function Foo(name) {
  this.name = name;
}
// Foo.prototype是原型对象
Foo.prototype.myName = function () {
  return this.name;
}

function Bar(name, label) {
  Foo.call( this, name );
  this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);
// 问题是修改了Bar.prototype.constructor 为 Foo
// Bar.prototype.__proto__ = Foo.prototype;
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);
 
Bar.prototype.myLabel = function () {
  return this.label;
}

var bar = new Bar("bar", "is object");
console.log(bar.myName());
console.log(bar.myLabel());