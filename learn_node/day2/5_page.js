let http = require('http');
// let fs = require('fs');
// let mime = require('mime')
// let fs_prm = fs.promises;
// let server = http.createServer((req, res) => {
//   //  req 是一个可读流  ； res 是一个可写流
//   /* if (req.url == '/') {
//     fs_prm.readFile('./page/index.html').then(data => {
//       res.end(data)
//     }).catch(err => {
//       res.end(err)
//     })
//     // res.end()
//   } else if (req.url == '/favicon.ico') {
//     res.end('1')
//   } else {
//     res.end('666')
//   } */
//   if (req.url == '/') {
//     req.url = '/index.html'
//   }
//   // /index.html  /favicon.ico  /1.css  /1.js
//   let url = './page' + req.url

//   // console.log(url + ':', mime.getType(url))
//   //  设置响应头  content-type
//   res.setHeader('Content-Type', mime.getType(url))
//   // fs_prm.readFile(url).then(data => {
//   //   res.end(data)
//   // }).catch(err => {
//   //   res.end(err)
//   // })
//   if (req.url == '/list') {
//     fs.createReadStream('./json/1.json').pipe(res)
//   } else {
//     fs.createReadStream(url).pipe(res)
//   }

// })

// server.listen(8081, () => {
//   console.log('服务 起于8081')
// })

let express = require('express');
let app = express();
app.listen(8081, () => {
  console.log('服务起于8081')
})

app.use(express.static('./page'))
app.use((req, res, next) => {
  res.header('set-cookie', 'aaa=123')
  next()
})

app.post('/list', function (req, res) {
  // 请求 3000的端口
  let str = ''
  const req2 = http.request({
    host: 'localhost',
    port: 3000,
    method: 'POST'
  }, (res2) => {
    res2.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
      str += chunk;
    });
    res2.on('end', () => {
      console.log('No more data in response.');
      // 请求3000成功了
      res.send(str)
    });
  })
  req2.write(JSON.stringify({ qqq: 123 }));
  req2.end();
  // res.send([1, 2, 3, 4, 5, 6])
})