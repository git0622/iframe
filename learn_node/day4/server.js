let webserver = require('ws').Server;
let wss = new webserver({
  port: 8080
})
let list = [];
wss.on('connection', function (ws) {
  list.push(ws)
  ws.on('message', function (msg) {
    console.log('后端接受到的信息', msg)
    list.forEach(item => {
      item.send(msg)
    })
  })
})