let http = require('http');

let server = http.createServer((request, response) => {
  // 当由请求过来的时候  就会出发这个函数
  console.log("注意 来， 请求了")
  // console.log(request)
  if (request.url == '/') {
    response.end('home')
  } else {
    response.end('11')
  }

})

let port = 8080
server.listen(port, () => {
  console.log('小卖部开好了 在8081房间')
})
server.on('error', function (err) {
  console.log(err.errno)
  if (err.errno === 'EADDRINUSE') {
    server.listen(++port)
  }
})