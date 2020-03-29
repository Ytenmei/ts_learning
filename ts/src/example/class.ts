// class Point {
//   x: number
//   y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   getPosition() {
//     return `${this.x}, ${this.y}`
//   }
// }
// const point = new Point(1, 2)
// // console.log(point) // {x:1, y:2}
// class Parent {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }
// public 构造函数属性默认是public
/**
 *
 *
 */
// private 私有属性
// class Parent {
//   private age: number
//   constructor(age: number) {
//     this.age = age
//   }
// }
// const p = new Parent(18) // {age:18}
// console.log(p.age) // 报错。私有属性禁止访问
//  protected 受保护


/**
 * readonly
 */
// class UserInfo {
//   readonly name:string
//   constructor(name:string) {
//     this.name = name
//   }
// }
// const userInfo = new UserInfo('liSon')
// console.log(userInfo)


// abstract class People {
//   constructor(name: string) {}
//   abstract printName(): void
// }
// // const p1 = new People()


// interface FoodInterface {
//   type: string
// }
// class FoodClass implements FoodInterface {
//   type: string
// }