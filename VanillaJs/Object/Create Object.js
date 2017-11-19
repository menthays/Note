// ## 1. Factory Pattern
// ### Declaration
(function () {
  console.log('\n1. Factory Pattern')
  console.log('----------------')
  const createPerson = (name, age) => {
    let o = new Object()
    o.name = name
    o.age = age
    o.sayName = () => {
      console.log(o.name)
    }
    // o.sayName = function () {
    //   console.log(this.name)
    // }

    // do not use arrow function here with 'this.name' since 'this' refer to {}
    return o
  }

  const personA = createPerson('Jack', 18)
  const personB = createPerson('Jones', 16)

  personA.sayName() // Jack
  personB.sayName() // Jones
  console.log(personA.sayName === personB.sayName) //false
  console.log(personA instanceof Object) //true
  // ### Summary
  // Use factory pattern to create an object will create a new instance does not share the same public methods everytime
  // instanceof Object, but which object?
}());


// ## 2. Constructor Function
(function () {
  console.log('\n2. Constructor Function')
  console.log('----------------')
  const Person = function (name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
      console.log(this.name)
    }
  }
  const personA = new Person('Jack', 18)
  const personB = new Person('Jones', 16)
  // Use 'new' to call constructor
  // without 'new' Person is a normal function
  // DO NOT USE arrow function to declare a constructor

  personA.sayName() // Jack
  personB.sayName() // Jones
  console.log(personA.sayName === personB.sayName) //false
  console.log(personA instanceof Person) // true
  // ### Summary
  // instanceof Person, good
  // still create a new instance does not share the same public methods everytime
  // That is to say, all function 'sayName' should refer to the same address in heap memory
}());


// ## 3. Prototype
(function () {
  console.log('\n3. Prototype')
  console.log('----------------')
  const Person = function () {

  }
  Person.prototype.name = 'Jack'
  Person.prototype.age = '18'
  Person.prototype.sayName = function () {
    console.log(this.name)
  }

  const personA = new Person()
  const personB = new Person()

  personA.sayName() // Jack
  personB.sayName() // Jack

  personA.name = 'Jones'

  personA.sayName() // Jones (from instance)
  personB.sayName() // Jack (from proto)

  console.log(personA.sayName === personB.sayName) // true
  console.log(personA instanceof Person) // true
  console.log(personA.hasOwnProperty('name')) // true
  console.log(personB.hasOwnProperty('name')) // false (from proto)
  console.log(Person.hasOwnProperty('name')) // true
  // ### Summary
  // Instanceof Person, good
  // Share the same public function, good
  // Use hasOwnProperty() and in to distinct whether the
  // property belongs to the instance itself or proto

  // But there is an important problem
  Person.prototype.friends = ['Alice', 'Ben']
  console.log('personA\'s friends: ' + personA.friends) // ['Alice', 'Ben']
  personB.friends.push("I am B's friends")
  console.log('personA\'s friends: ' + personA.friends) // ['Alice', 'Ben', 'I am B's friends']
  // Reference Types will be shared too!
}());

// ## 4. Constructor&Prototype (Commonly used)
// ### Declaration
(function () {
  console.log('\n4. Constructor&Prototype')
  console.log('----------------')
  const Person = function () {
    this.name = 'Jack'
    this.age = '18'
    this.friends = ['Alice', 'Ben']
  }

  Person.prototype = {
    constructor: Person,
    sayName() {
      console.log(this.name)
    }
  }

  const personA = new Person('Jack', 18)
  const personB = new Person('Jones', 16)

  console.log('personA\'s friends: ' + personA.friends) // ['Alice', 'Ben']
  personB.friends.push("I am B's friends")
  console.log('personA\'s friends: ' + personA.friends) // still ['Alice', 'Ben'']
}());
