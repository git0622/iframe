less  css 高级JS(.vue .jsx)  ...  代码转化
编写代码自动刷新页面
文件压缩 css js html
模块化


使用express编写的一个打包工具


## webpack 优化

1 - 压缩js 和 css html
    html 的压缩只需要在 html-webpack-plugin的配置中添加 minify:true
    css css-minimizer-webpack-plugin
    js  terser-webpack-plugin

2 - exlude 排除不需要使用指定loader解析的文件  /node_modules/   

3 - noParse  可以提升webpack的编译性能  大白话就是告诉webpack 后边对应的这些个包 不需要分析它内部的依赖 因为他们没有任何以来 都是独行侠

4 - resolve
        - alias  可以定义些文件夹路径的别名 可以提升webpack查找资源文件的速度
        - extensions  可以让我们在编写代码的时候 不用谢文件的后缀
        - modules  可以让我们引入自己的资源的时候  可以不写路径

5 - webpack.ProvidePlugin({
    自定义名字(我们自己的资源文件中用的哪个名字):'包的名字'
})        // 可以让我们在使用某些包的时候 不用每个使用它的地方都引入一遍

6- webpack.IgnorePlugin  可以忽略某些包内的一些不必要文件的引入
        若需要某个文件的时候 再单独引入即可

7- externals：{} 外部扩展； 可以让我们通过src的方式引入资源  但是组件中仍然可以按照模块化的方式使用

8 -  splitchunks  分包 

9 - DllPlugin 和 DllReferencePlugin  动态链接库
       就是把一些不会改变的哪些包 单独打包
       先使用 DllPlugin  把某些包单独打包
       然后再html模板中引入打包好的包
       然后再到主配置文件中使用DllReferencePlugin 告诉主配置文件 在打包的时候 可以忽略哪些包
10 - thread-loader  多进程打包  （happypack） 
