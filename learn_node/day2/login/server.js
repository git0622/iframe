let express = require('express')
let app = express();
let bodyParser = require('body-parser')
app.listen(3000, () => {
  console.log(3000)
})
app.use(express.static('../login'))
app.use(bodyParser.json())
let userqqid = '123';
app.post('/login', (req, res) => {
  console.log(req.body)
  if (req.body.name == 'zhufeng') {
    userqqid = req.body.name + 'qqqwwwweree';
    res.header('set-cookie', `userqqid=${userqqid}`)
    res.send(JSON.stringify({ msg: 'ok' }))
  }

})
app.get('/list', (req, res) => {
  console.log(req.headers.cookie)
  let id = (req.headers.cookie || '').match(/userqqid=(.+)/); // userqqid=zhufengqqqwwwweree
  if (id && id[1] == userqqid) {
    res.send('[111,22,33]')
  } else {
    res.send(JSON.stringify({ msg: '未登录' }))
  }
})