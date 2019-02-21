// function fuc() {}

// fuc.info = 'info'
// fuc.say = function() {
//   console.log(fuc.info)
// }

// export default fuc


var obj = {}

obj.info = 'obj'
obj.say = function() {
  // console.log(obj.info)
  setTimeout(() => {
    say(obj.info)
  }, 100);
}

function say (str) {
  console.log(str)
}

export default obj


