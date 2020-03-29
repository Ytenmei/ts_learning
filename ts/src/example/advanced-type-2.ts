/* this 類型的使用 */
// class Counter {
//   constructor(count: number = 0) { }
//   add(value: number) {
//     this.count += value
//     return this
//   }
//   subtract(value: number) {
//     this.count -= value
//     return this
//   }
// }
// let count = new Counter(10)
// console.log(count.add(3).subtract(2))

// class PowCounter extends Counter {
//   constructor(count: number = 0) {
//     super(count)
//   }
//   pow(value:number) {
//     this.count = this.count ** value
//     return this
//   }
// }
// let powCounter = new PowCounter(2)
// console.log(powCounter.pow(3).add(1).subtract(3))

