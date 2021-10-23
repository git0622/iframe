/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
/* 
   Vue 如何检测数组变化?

   把vue数据中的数组的原型指向改成了自定义的一个地址

*/
import { def } from '../util/index'

const arrayProto = Array.prototype;// 使用arrayProto记录数据原有的原型
export const arrayMethods = Object.create(arrayProto)// 创造了一个空对象，这个空对象的__proto__指向数组的原型

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]// 获取到了数组原型上的对应的方法
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})
