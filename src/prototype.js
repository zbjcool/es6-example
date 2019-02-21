function Persion (name) {
  this.name = name;
  this.showName = function () {
    console.log(this.name);
  }
}

var me = new Persion('zbj');
me.showName();