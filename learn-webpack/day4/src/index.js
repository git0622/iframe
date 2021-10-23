import './assets/1.css'
import './assets/2.less'
// let a = 123;
// console.log(a)
// let img = new Image()
// img.src = url;
// img.onload = function () {
//   document.body.appendChild(img)
// }

// fetch('/1.json').then(res => res.json()).then(data => {
//   console.log(data)
// })
fetch('/api/list').then(res => res.json()).then(data => {
  console.log(data)
})

import { a, b } from './util/a.js'
import { add } from './util/b.js'
add(a, b)
console.log(a)
// alert(a)