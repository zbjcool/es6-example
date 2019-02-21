{
  var aa = 1;
}
aa = 3;
console.log(aa)


const callbacks = []

for (let i = 0; i <= 2; i++) {
  callbacks[i] = function() {
    return i * 2
  }
}

console.table([
  callbacks[0](),
  callbacks[1](),
  callbacks[2]()
])


function print(str) {
  console.log(str)
}
print('test');

// var _default =
// /*#__PURE__*/
(function (str) {
  print(str)
})('test1');

for (var i=1; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}
// 每秒一次的频率输出5次6
// 5个setTimeout函数共享作用域
for (var i=1; i<=5; i++) {
  (function() {
    setTimeout(() => {
      console.log(i);
    }, i*1000);
  })();
}

for (var i=1; i<=5; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);
    }, j*1000);
  })(i);
}

for (let i=1; i<=5; i++) {
  setTimeout(() => {
    console.log(j);
  }, j*1000);
}

// // 最初始场景，用来加载进度条
// var _default =
// /*#__PURE__*/
// function (_Phaser$State) {
//   class Point {
//     constructor(x, y) {
//       this.x = x
//       this.y = y
//     }
  
//     toString() {
//       return `(${this.x},${this.y})`
//     }
//     preload() {
//       print('test2')
//     }
//   }
//   var p = new Point(1,2)
//   p.preload()
// }('sd');

// // function Line(){}

// // Line.fuc = function() {
// //   console.log('fuc')
// // }
// // Line.fuc()

// function Line(){}

// Line.prototype.fuc = function() {
//   console.log('fuc1')
// }

// var line = new Line();

// line.fuc()


// var c = function(p){
//   console.log(p); 
//   var foo = 1
// }('aaaa')
// console.log(foo);

// // var foo = 1
// // console.log(foo);



