// function Foo() {
//   this.type = 'food'
// }
// Foo.prototype.getType = function () {
//   return this.type
// } 
// function Vegetables (name) {
//   this.name = name
// }

// Vegetables.prototype = new Foo()
// const tomato = new Vegetables('tomato')
// console.log(tomato)



// class Parent {
//   constructor (point) {
//     this.point = point
//   }
//   getName () {
//     return this.name
//   }
// }
// class Child extends Parent {
//   constructor (name, age) {
//     super(name)
//     this.age = age
//   }
// }
// const c = new Child('Ytenmei', 18)
// console.log(c) // Child {name: "Ytenmei", age: 18}
// console.log(c.getName()) // Ytenmei



// super 作为函数
// super 作为对象
    // 在普通方法中 => 父类的对象
    // 在静态方法中 => 父类


// class Parent {
//   constructor () {
//     this.type = 'parent'
//   }
//   getName () {
//     return this.type
//   }
// }
// Parent.getType = () => {
//   return `is parent`
// }
// class Child extends Parent {
//   constructor () {
//     super()
//     console.log('constructor:' + super.getName())
//   }
//   getParentName () {
//     console.log('getParentName:' + super.getName())
//   }
//   // getParentType () {
//   //   console.log('getParentType:' + super.getType()) // 报错，父类本身的方法不能使用
//   // }
//   static getParentType () {
//     console.log('getParentType:' + super.getType()) // is parent 静态方法指向父类本身 
//   }
// }
// const C = new Child()
// console.getParentName()
// Child.getParentType() // 可以调用到了





class Parent {
  constructor () {
    this.name = 'parent'
  }
  print () {
    console.log(this.name)
  }
}
class Child extends Parent {
  constructor () {
    super()
    this.name = 'child'
  }
  childPrint () {
    super.print()
  }
}
const c = new Child()
c.childPrint() // 'child' super的方法指向子类的实例