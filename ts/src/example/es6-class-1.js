// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.getPostion = function () {
//   return `${this.x}, ${this.y}`
// }
// var p1 = new Point(2, 3)
// console.log(p1)

// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPostion () {
//     return `${this.x}, ${this.y}`
//   }
// }





// var info = {
//   _age: 18,
//   set age (newValue) {
//     if (newValue > 18) {
//       console.log('怎么变老了')
//     } else {
//       console.log('哈哈哈')
//     }
//   },
//   get age () {
//     console.log('知道你的年龄了')
//     return this._age
//   }
// }
// console.log(info.age)
// info.age = 17 // 哈哈哈
// info.age = 18 // 怎么变老了




// class Info {
//   constructor (age) {
//     this.age = age
//   }
//   set age (newAge) {
//     this._age = newAge
//   }
//   get age () {
//     return this._age
//   }
// }
// const info = new Info(18)
// info.age = 17
// console.log(infos.age) // 17


// class Infos {
//   constructor () {}
// }

// const Infos = class {
//   constructor () {}
// }
// const testInfo = new Info()



class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  getPosition () {
    return `${this.x}, ${this.y}`
  }
  static getClassName () {
    return Point.name
  }
}

const p = new Point(1, 2)
console.log(p.getPosition()) // {1, 2}
console.log(p.getClassName()) // 报错，静态方法
console.log(Point.getClassName()) //  Point . 自身調用才可以


function Point() {
  console.log(new.target)
}
/**
 *  new.target 返回当前的构造函数
 */
// const p = new Point()
// const p2 = Point()

// class Point {
//   constructor () {
//     console.log(new.target)
//   }
// }
// const p3 = new Point()