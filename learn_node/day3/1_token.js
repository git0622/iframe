let express = require('express')
let app = express();
let bodyParser = require('body-parser')

app.listen(3002, function () {
  console.log('3002')
})
app.use(express.static('./static'))


app.use(bodyParser.json())
let mySession = {};
let secret = '12377'
/* app.post('/login', function (req, res) {
  if (req.body.name == req.body.psw) {
    let temp = {
      name: req.body.name,
      id: req.body.name,
      sessionId: id + secret
    }
    mySession[req.body.name] = temp;
    req.setHeader('set-cookie', "mysession-id=" + temp.sessionId)
  }
}) */

function scretFn(str) {
  return str + '.12356456' + '.' + new Date().getTime()
}
function unscretFn(str) {
  return str.split('.')[0]
}

app.post('/login', function (req, res) {
  // req.body 对应的是前端传递的请求体
  if (req.body.name == req.body.psw) {
    let token = scretFn(req.body.name)
    res.send({
      name: req.body.name,
      token: token
    })
  } else {
    res.send({
      errorCode: 1,
      msg: '用户名密码错误'
    })
  }
})
app.post('/list', function (req, res) {
  //后端规定  对应的令牌 需要前端从请求头 以mytoken的属性名过来
  // console.log(req.headers.mytoken)
  let token = req.headers.mytoken
  if (token) {
    let id = unscretFn(token)
    res.send("根据用户id" + id + '获取对应信息返回给前端')
  } else {
    res.send("未登录")
  }


})