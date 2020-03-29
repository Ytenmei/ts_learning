// 布尔类型
// let boo: boolean = false
let boo: boolean
boo = true

// 数值类型
let num: number = 123
// num = 'abc'

// 字符串类型
let str: string
str = 'abc'
str = `abc${num}`

console.log(str)

// 数组类型
/**
 * 写法1
 */
let arr: number[]
arr = [1,2,3]

/**
 * 写法 2
 */

 let arr2: number[]
 let arr3: (string | number)[]


//  元祖类型
let tuple: [string, number, boolean]
tuple = ['a', 1, true]
console.log(tuple)

// 枚举类型
enum Roles {
  SUPER_ADMIN,  // 0
  ADMIN, // 1
  USER // 2
}
console.log(Roles.SUPER_ADMIN) // 0
console.log(Roles[0]) // SUPER_ADMIN

// any 类型
/**
 * 任何类型
 */
let value:any
value = 'abc'
value = 123
value = false
const arr4: any[] = [1,2,'a']

// void 类型
const consoleText = (text: string): void => {
  console.log(text)
}

consoleText('111')

// null 和 undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 'abc'

// never 类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}
// 可以赋值给其他类型，其他类型不可以赋值给never 类型


//  object
let obj =  {
  name: 'lison'
}
let obj2 = obj
obj2.name = 'L'
console.log(obj)


//  类型断言
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}