(function () {
  sayHi() // effective
  function sayHi() {
    //function declaration
  }
}());

(function () {
  sayHi() // function not found
  const sayHi = function () {
    // function expression => declare a param and assign an anoymous function to it
  }
}())