#  node 就是一个 提供了js载服务器上运行的环境

##  esModule(import   export)  commonjs规范（require  exports）

##  npm i  xx -S
    npm install xx --save

    cnpm  全局安装cnpmnpm install cnpm -g --registry=https://registry.npm.taobao.org

    yarn  全局安装yarn npm  i yarn -g

    npm i jquery --save    npm i jquery -S  他俩一个意思 装的包都属于生产依赖
    
    npm i jquery --save-dev  npm i jquery -D  他俩一个意思 装的是开发环境下的依赖
      (安装的这写插件是分为  生产依赖和开发依赖)

  包 大概分为三类 内置包(fs path  url  http ...)  
                 三方包
                 自己的文件

  path  专门用来处理路径的一个内置包           