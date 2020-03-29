// 类型推论
// let name2 = 'Ytenmei'
// name = 123  // 报错

// let arr5: (number | string)[] = [1, 'a']
// arr5 = [1, 2, 3, false] // 不能加 false


// window.onmousedown = (event: { target: any }) => {
//   console.log(event)
// }


// interface Info {
//   name: string
// }
// let infos:Info
// const infos1 = { name: 'Ytenmei'}
// const infos2 = { age:18}
// const infos3 = { name: 'Ytenmei', age: 18}
// infos = infos1
// // infos = infos2 // 报错，没有name 接口字段
// infos = infos3 // 多了个age不会报错，因为有name



// 参数个数
// let x = (a: number) => 0
// let y = (b: number, c: number) => 0
// y = x
// x = y // 报错。参数个数必须小于等于被赋值的参数的个数


// 参数类型
// let x = (a:number) => 0
// let y = (b:string) => 0
// x = y // 报错，参数类型不对应

// 可选参数和剩余参数
// const getSum = (arr:number[], callback: (...args:number[]) => number): number => {
//   return callback(...arr)
// }
// const res = getSum([1,2,3], (...args:number[]): number => args.reduce((a, b) => a + b, 0))
// console.log(res)


// 函数参数双向斜变
// let funcA = (arg: number | string): void => {}
// let funcB = (arg: number): void => {}
// funcA = funcB // 报错，类型不兼容



// 返回值类型
// let x = (): string | number => 0
// let y = (): string => 'a'
// let z = (): boolean => false
// x = y
// y = x // 报错
// y = z //


// 函数重载
function merge(arg1: number, arg: number): number
function merge(arg1: string, arg: string): string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2
}
function sum(arg1: number, arg: number): number
function sum(arg1: any, arg2: any) {
  return arg1 + arg2
}
let func = merge
// func = sum // sum 缺少string 类型的函数重载，这种情况下为不兼容会报错

enum StatusEnum {
  On,
  Off
}
enum AnimalEnum {
  Dog,
  Cat
}
let s = StatusEnum.On
// s = 2
// s = AnimalEnum.Dog // 报错，类型不兼容

class AnimalClass {
  static age: number
  constructor(name: string) { }
}
class PeopleClass {
  static gae: string
  constructor(name: string) { }
}
class FoodClass {
  constructor(name: number) { }
}
let animal: AnimalClass
let people: PeopleClass
let food: FoodClass
// animal = people
// animal = food


class ParentClass {
  private age!: number
  constructor() {
    console.log(this.age)
  }
}
class ChildrenClass extends ParentClass {
  constructor() {
    super()
  }
}
class OtherClass {
  private age!: number
  constructor() { }
}
// const children: ParentClass = new ChildrenClass()
// const other: ParentClass = new OtherClass()


// 泛型类型
interface Data<T> {
  data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2