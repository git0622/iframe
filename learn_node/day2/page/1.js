let btn = document.getElementById('btn')
btn.onclick = function () {
  console.log(666)
  let url = 'https://www.souyidai.com/token/acquire'

  fetch('http://127.0.0.1:7001/list?q=123&ee=2345', {
    // credentials: 'include',
    method: 'get',
    // body: "qq=123&rrr=235&ttt=6666"
  }).then(res => res.json()).then(data => {
    // fetch(url, { method: "POST" }).then(res => res.json()).then(data => {
    console.log(data)
    let str = ``;
    data.forEach(item => {
      str += `
      <li>${item}</li>
    `
    })
    ul.innerHTML = str;

  })
}