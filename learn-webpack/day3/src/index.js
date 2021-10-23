import './css/1'
// import {util_qqq } from './util/index.js'
import { util_qqq } from 'u/index.js'
import moment from 'moment'
// import 'moment/dist/locale/zh-cn'
import 'moment/locale/zh-cn'

import axios from 'axios'
console.log(axios)

import { p1 } from 'p1'
console.log(p1)

import Vue from 'vue'
import VueX from 'vuex'
// console.log(new Vue(), new VueX.Store())
// window.VueX = VueX
window.Vue = Vue
console.log(new Vue())
setTimeout(() => {
  console.log(
    new VueX.Store({}))
}, 1000);

// import $ from 'jquery'

console.log($$)
console.log(util_qqq)
console.log(moment.locale('zh-cn'))
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

let a = 123;
let b = () => { }
console.log(666, a)

@logger // 装饰器
class A {
  // constructor() {
  //   this.qqq = 21
  // }
  qqq = 123
}
function logger(target) {
  target.log = function () {
    console.log(666)
  }
}

console.dir(new A)

async function fn() {
  let a = await Promise.resolve().then(data => 666)
  // console.log(a, b, qqq)
}
fn()
console.log(888)