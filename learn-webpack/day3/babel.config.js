module.exports = {
  // 预先配好的设置  简称预设 ：他一个一个插件的集合
  presets: ['@babel/preset-env'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-transform-runtime"]
    // 不是单纯的处理了async  await 向那些在数组类或者字符串类的原型上新增的哪些方法 也是通过这两个包解决的 
  ]
}

// 这个文件是专门为babel准备的配置文件
//  @vue/cli  create-reat-app  搭建出来的项目  都是基于webpack配置好的