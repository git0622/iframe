let fs = require('fs').promises;
module.exports = function (app) {
  app.get('/api/list', function (req, res) {
    fs.readFile('./json/1.json').then(data => {
      res.json(data.data.toString());
    })

  });
  app.post('/api/login', function (req, res) {
    res.json({
      user: 'zhufeng',
      msg: '登录陈工'
    })
  })
}