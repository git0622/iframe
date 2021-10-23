class Myplugin {
  constructor(options = {}) {
    console.log(options)

    console.log('-------------plugin被  new 了')
  }
  apply(compiler) {
    let hooks = compiler.hooks;

    console.log('-------------plugin的apply 了')
    hooks.emit.tap('myplugin', function (compilation) {

      console.log('-------------plugin的emit 了')
      let assets = compilation.assets;//大暴出来的所有的文件的信息  这是一个对象
      let str = ``;
      for (let k in assets) {

        str += `文件名是${k};文件大小是${JSON.stringify(assets[k])}\n`
      }
      assets['info.txt'] = {
        source() {
          return str
        },
        size() {
          return str.length
        }
        // "_valueIsBuffer": false,
        // "_value": str
      }
    })
  }
}
module.exports = Myplugin