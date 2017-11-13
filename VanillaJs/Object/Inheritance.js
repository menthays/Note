(function () {
  const Parent = function (name) {
    this.name = name
    this.colors = ['red', 'blue', 'yello']
  }
  Parent.prototype.sayName = function () {
    console.log(this.name)
  }

  // inherit attributes  
  const Children = function (name, age) {
    Parent.call(this, name)
    this.age = age
  }
  // inherit methods
  Children.prototype = new Parent()
  Children.prototype.constructor = Children
  Children.prototype.sayAge = () => {
    console.log(this.age)
  }
}())