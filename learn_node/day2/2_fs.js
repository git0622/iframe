let fs = require('fs')// 内置模块 用来读写文件的
let prm_fs = fs.promises;
let path = require('path');
//  凡是 带有 Sync字段的方法都是同步的 不带的都是异步的
let str = path.resolve(__dirname, './test.txt')
// let res = fs.readFileSync(str)
// console.log(res)


// let res = fs.readFile(str, { encoding: 'utf-8' }, (err, data) => {
//   // 如果err 有值 则代表读取失败了
//   console.log(err, data)
//   if (!err) {

//   } else {
//     console.log("失败了")
//   }
// })
// console.log('res', res)

// prm_fs.readFile(str + 'q', { encoding: 'utf-8' }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

//  写入 相当于一个覆盖的过程
// fs.writeFile(str, Buffer.from("珠峰培训"), { encoding: 'utf-8' }, (err) => {
//   if (!err) {
//     console.log("陈工")
//   }
// })

// fs.writeFileSync

let str2 = path.resolve(__dirname, './test.html')

// fs.writeFile(str2, Buffer.from("珠峰培训"), { encoding: 'utf-8' }, (err) => {
//   if (!err) {
//     console.log("陈工")
//   }
// })


// fs.appendFile(str2, "中国", (err) => {
//   if (!err) {
//     console.log("添加陈工")
//   }
// })

// myAppend(str2, "中国\nchina", { encoding: 'utf-8' }, (err) => {
//   if (!err) {
//     console.log("添加陈工")
//   }
// })
// function myAppend(url, data, options, cb) {
//   fs.readFile(url, { encoding: 'utf-8' }, (err, val) => {
//     if (!err) {
//       console.log((val + '').split(/\n/g))
//       // fs.writeFile(url, val + data, options, cb)
//     }
//   })
// }

//  删除
// fs.unlink(str2, (err) => {
//   console.log(err)
// })


// 创造文件夹
// fs.mkdir('./qqq', (err) => {
//   console.log(err)
// })

// fs.rmdir('./qq', (err) => {
//   console.log(err)
// })


//  创造的时候要求 父文件夹是存在的
// fs.mkdir('./qq/ww', {
//   // recursive: true,// 不管有没有父文件夹 都创造
// }, (err) => {
//   console.log(err)
// })

// fs.readdir('../day2', (err, data) => {
//   console.log(data)
//   data.forEach(item => {
//     fs.stat(path.resolve(__dirname, item), (error, stat) => {
//       console.log(item)
//       console.log(stat.isFile())
//     })
//   })
// })

function rmdir(dir, cb) {
  fs.stat(dir, (err, stat) => {
    if (stat.isFile()) {
      fs.unlink(dir, cb)
    } else {
      fs.readdir(dir, (errs, dirAry) => {
        dirAry = dirAry.map(item => path.join(dir, item))
        if (dirAry.length == 0) {
          // 空文件夹
          fs.rmdir(dir, cb)
        } else {
          let index = 0;// 记录删除文件的索引
          function done() {
            index++;
            if (index == dirAry.length) {
              fs.rmdir(dir, cb)
            }
          }
          for (let i = 0; i < dirAry.length; i++) {
            let file_dir = dirAry[i];
            rmdir(file_dir, done)
          }
        }
      })
    }
  })
}
rmdir('./qq', (err) => {
  console.log(err)
})




