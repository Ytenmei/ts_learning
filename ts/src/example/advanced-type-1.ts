/* 交叉类型 */
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// mergeFunc({ a: 'a' }, { b: 'b' })


/* 联合类型: type1 | type2 | type3 */
// const getLengthFunc = (content: number | string): number => {
//   if (typeof content === 'string'){
//     return content.length
//   } else {
//     return content.toString.length
//   }
// }
// console.log(getLengthFunc('111'))

/* 类型保护 */
// const valueList = [123, 'abc']
// const getRandomValue = () => {
//   const num = Math.random() * 10
//   if (num < 5) {
//     return valueList[0]
//   } else {
//     return valueList[1]
//   }
// }
// const item = getRandomValue();
// function isString(value:number | string):value is string {
//   return typeof value === 'string'
// }

/* 类型保护   判断类型 */
// if (typeof item === 'string') {
//   console.log(item.length)
// }else {
//   console.log(item.toFixed())
// }

/* 使用多次类型断言（不适合，代码冗余） */
// if ((item as string).length) {
//   console.log((item as string).length)
// }else {
//   console.log((item as number).toFixed())
// }


// class CreateByClass1 {
//   age = 18
//   constructor() { }
// }
// class CreateByClass2 {
//   name = 'Ytenmei'
//   constructor() { }
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2()
// }
// const item1 = getRandomItem()
// if (item1 instanceof CreateByClass1) {
//   console.log(item1.age)
// } else {
//   console.log(item1.name)
// }


/* null 和 undefined */
// let values = '123'
// values = undefined

/* 三种不一样的类型 */
// string | undefined / string| null / string | undefined | null
// const sumFunc = (x: number, y?: number) => {
//   return x + (y || 0)
// }

// const getLengthFunction = (value: string | null): number => {
//   return (value || '').length
// }

// function getSplicedStr(num:number | null):string {
//   function getRes(prefix:string) {
//     return prefix + num!.toFixed().toString()
//   }
//   num = num || 0.1
//   return getRes('lison-')
// }

/* 类型别名 */
// type TypeString = string
// let str2: TypeString
// type PositionType<T> = { x: T, y: T }
// const position1: PositionType<number> = {
//   x: 1,
//   y: -1
// }
// const position2: PositionType<string> = {
//   x: 'abc',
//   y: 'left'
// }

// type Child<T> = {
//   current: T,
//   child?: Child<T>
// }
// let ccc: Child<string> = {
//   current: 'first',
//   child: {
//     current: 'second',
//     child: {
//       current: 'third'
//     }
//   }
// }
// type Childs = Childs[] // error
// extends implements （不行）

// type Alias = {
//   num: number
// }
// interface Interface {
//   num:number
// }
// let _alias: Alias = {
//   num: 123
// }
// let _interface: Interface = {
//   num: 321
// }

/* 不能将类型“"haha"”分配给类型“"Lison"”。 */
// type Name = 'Lison'
// const name3: Name = 'haha'

/* 字符串字面量 */
// type Direction = 'north' | 'east' | 'south' | 'west'
// function getDirectionFirstLetter(direction: Direction) {
//   return direction.substr(0, 1)
// }
// getDirectionFirstLetter('north')

/* 数字字面量类型 */
// type Age = 18
// interface InfoInterface {
//   name: string,
//   age: Age
// }
// const _info: InfoInterface = {
//   name: 'lison',
//   age: 18
// }

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */

interface Square {
  kind: 'square',
  size: number
}
interface Rectangle {
  kind: 'rectangle',
  width: number,
  height: number
}
interface Circle {
  kind: 'circle',
  radius: number
}
type shape = Square | Rectangle | Circle
/* 完成性检查 */
/* 函数缺少结束 return 语句，返回类型不包括 "undefined" */
function assertNever(value: never): never {
  throw new Error('Unexpected object:' + value)
}
function getArea(s: shape): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
      break;
    case 'rectangle':
      return s.height * s.width;
      break;
    case 'circle':
      return Math.PI * s.radius ** 2
      break;
    default:
      return assertNever(s)
  }
}
