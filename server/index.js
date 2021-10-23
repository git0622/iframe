let express = require('express')
let app = express()
app.listen(9000)
app.use((req, res, next) => {
  console.log(req.headers.host)
  next()
})
app.get('/api/list', function (req, res) {
  res.send({
    q: 234,
    w: 345
  })
})
app.get('/list', function (req, res) {
  res.send([1, 2, 3, 4, 5, 6])
})