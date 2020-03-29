// symbol ES6 新增基本数据类型：指定独一无二的值
const s1 = Symbol()
console.log(s1) // Symbol()

const s2 = Symbol()
console.log(s2)  // symbol()

/**
 * console.log(s1 === s2)
 * 会永远返回false所以这样比较会报错。（可在浏览器里试）
 */


const s3 = Symbol('lison')
console.log(s3) // Symbol(lison)
const s4 = Symbol('lison')
console.log(s4) // Symbol(lison)
/**
 * console.log(s3 === s4)
 * 同样返回false  Symbol 的值为独一无二的
 */
const s5 = Symbol('name')
const info2 = {
  [s5]: 'lison',
  age: 18,
  sex: 'nan'
} // {age: 18, sex:"nan", Symbol(name): "lison"}
for (const key in info2) {
  console.log(key)
}  // age: 18    sex:"nan"

console.log(Object.keys(info2)) // ["age","sex"]
console.log(Object.getOwnPropertyNames(info2)) // ["age","sex"]
console.log(JSON.stringify(info2)) // {"age": 18, "sex": "man"}

console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(name)]
console.log(Reflect.ownKeys(info2))  // ["age","sex", Symbol(name)]


// Symbol.for()  Symbol.keyFor()

const s6 = Symbol.for('lison')
const s7 = Symbol.for('lison')
const s8 = Symbol.for('haha')
/**
 * Symbol.for创建值会先从全局环境下查找有没有一样的值，如果有的话就要查找到的值，
 * 否则就创建改值
 * s6 === s7 true  s7 === s8 false
 */

console.log(Symbol.keyFor(s8)) // haha  Symbol创建的值为undefined。Symbol.for 创建的值为他的字面量值


//  Symbol.hasInstance