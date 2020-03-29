// const getFullName = ({ firstName, lastName }) => {
//   return `${firstName} ${lastName}`
// }
// getFullName({
//   firstName: 'haha',
//   lastName: 'Li'
// })
interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
getFullName({
  firstName: 'haha',
  lastName: 'Li'
})


interface Vegetable {
  color?: string,
  readonly type: string
  // [prop: string]: any
}
const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}
const vegetables = {
  type: 'tomato',
  color: 'red',
  size: 2
}
// console.log(getVegetables(vegetables))
let vegetableObj: Vegetable = {
  type: 'tomato'
}
// vegetableObj.type = 'carrot'

interface ArrInter {
  0: number,
  readonly 1: string
}

let arr1: ArrInter = [1, '2']
// arr1[1] = 'b'

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//   [id: number]: string
// }
// const role1: RoleDic = {
//   0: 'super_admin'
// }

interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  0: 'super_admin',
  1: 'admin'
}


interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: number
}
interface Carrot extends Vegetables{
  length: number
}
const tomato: Tomato = {
  radius: 1,
  color: 'red'
}
const carrot: Carrot = {
  length: 2,
  color: 'orange'
}

interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()