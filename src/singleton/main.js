// import Singleton from './es5-singleton'
// import Singleton from './es6-singleton-1'


// const a = Singleton.getInstance("jack1")
// const b = Singleton.getInstance("jack2")
// console.log(a === b)
// console.log(a.name)
// console.log(b.name)


import singleton from './es6-singleton-2'


singleton.name = "aa"

console.log(singleton.name)