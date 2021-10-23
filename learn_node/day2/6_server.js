let http = require('http');
let url = require('url')

let allowaAry = [
  'http://127.0.0.1:5500',
  'http://127.0.0.1:5501',
  'http://127.0.0.1:5502'
]

let server = http.createServer((req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", '*')
  // console.log(req.headers.origin)

  if (allowaAry.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', "GET")
    // res.setHeader('set-cookie', "aaa=234;SameSite=None;Secure=true;httpOnly=true;path=/")
    res.setHeader('set-cookie', "aaa=234")

    if (req.method.toLowerCase() == 'get') {
      // console.log(url.parse(req.url, true).query)
    } else if (req.method.toLowerCase() == 'post') {
      //若要接受请求体中的参数的时候 需要绑定 data 事件
      let str = '';
      console.log(req.headers)
      req.on('data', (chunk) => {
        // console.log(chunk.toString())
        str += chunk
      })
      req.on('end', () => {
        console.log(str)
      })
    }



    res.end(JSON.stringify([100, 200, 3000, 400, 5000]))
  }

})


server.listen(3001, () => {
  console.log('后台服务起于3000端口')
})