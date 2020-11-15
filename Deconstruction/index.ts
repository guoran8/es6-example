// 传统方式
let list = ["First", "Second"]
let firstEle = list[0]
let secondEle = list[1]

// ES6 解构
let [f, s] = list

// 对象解构
const fullName  = {
  first: 'hilary',
  last: 'zhang'
}

const { first, last } = fullName

// 解构未声明对象 undefined
const { firstName, lastName } = { firstName: "hilary", lastName: "zhang" }

// 重命名解构对象属性
const { first: reFirstName, last: reLastName } = fullName

// 解构默认值
const { china = "CHINA", america = "AMERICA" } = { china: "long story country"}
console.log(china, america)

// 可以同时重命名和解构默认值

// 解构在函数中的运用
function log({ first }) {
  console.log('the first name is:', first)
}

log(fullName)

// 返回值解构数组
function fun() {
  return [1, 2, 3]
}

let [a, ,c] = fun()

// 解构嵌套对象
const worlds = {
  country: "CHINA",
  provinces: [{
    name: "Sichuan"
  }]
}

const { country, provinces: [{ name: provinceName }] } = worlds
console.log(country, provinceName)

// 数组解构
const arrTemp = ["long leg", "big bra"]
const [leg, bra, face = "pretty"] = arrTemp

// 解构中交换变量
let redColor = "red"
let otherColor = "other"
// [redColor, otherColor] = [otherColor, redColor]

// 数组中交换元素位置
const arr = [1, 2, 3]
// [arr[2], arr[1]] = [arr[1], arr[2]]