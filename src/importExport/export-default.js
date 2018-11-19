var name = 'export-default'
var sex = 'male'
function sayName() {
  console.log(name)
}

// 一个模块只能使用一次
export default {
  name,
  sex,
  sayName
}

// 不用取名字，在import会指定一个名字
// export default function() {
//   console.log('default function')
// }

