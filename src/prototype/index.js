// function Foo() {
//   this.name = '';
//   this.setName = function (name) {
//     this.name = name;
//   }
//   this.showName = fucntion () {

//   }
// }

// var foo = new Foo();
// foo.setName('hello');
// console.log(foo.name);

// Object.create
// var Controller = {
//   show(msg) {
//     console.log(msg)
//   }
// }

// var HelloController = Object.create(Controller);

// HelloController.show("hello");


// Object.setPrototypeOf
var Controller = {
  show(msg) {
    console.log(msg)
  }
}

var HelloController = {

}

Object.setPrototypeOf(HelloController, Controller);

HelloController.show("hello");


// Object.create  prototype
// function Controller() {
//   this.show = function(msg) {
//     console.log(msg);
//   }
// }

// Controller.prototype.showMsg = function (msg) {
//   console.log(msg);
// }

// function HelloController() {

// }

// HelloController.prototype = Object.create(Controller.prototype);

// var controller = new Controller();
// var helloController = new HelloController();

// helloController.showMsg("hello"); // hello
// helloController.show("hello"); // helloController.show is not a function

