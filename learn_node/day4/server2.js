let http = require('http')

let list = []
let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  if (req.url == '/qqq') {
    res.end(JSON.stringify(list))
    return
  }
  let str = req.url.split('?')[1]
  list.push(str)

})

server.listen(9000)