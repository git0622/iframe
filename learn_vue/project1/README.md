# project1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


$parent 对应的就是我们的父组件本身； 这样的话 父组件上的所有的数据  我们子组件都能获取到
$children 对应当前组件的所有子组件  vue3移除了


$attrs  对应的是没有被子组件接受的哪些父组件传进来的数据
$listeners   对应的是所有的父组件传进来的事件   vue3移除 整合到了attrs中了 
        在做一些ui组建的二次封装的时候 会用到

provide/inject

$refs 跟$children 一个意思；可以直接获取到对应的子组件
        ref 除了可以获取组件 也可以用来获取元素

eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式      vue3不能用   



vue的双向绑定原理：
        先走数据劫持  observe(obj)这个方法  该方法主要的考的Observer这个类
                当new Observer这个类 会执行一个walk方法
                walk方法 通过循环的方式执行的了 defineReactive这个方法
        再走模板编译 就会使用我们哪些被劫持的数据
                当时用的的 就会触发我们劫持的时候设置该属性的get函数 
                在get函数执行的时候 会进行依赖收集 收集的就是 使用这个属性的时候创建的观察者(watcher)     
                依赖收集靠的是  Dep这个么小类  每一个被劫持的属性 都会有一个Dep的实例 dep
                收集的时候 考的就是这个dep的 depend方法 depend方法执行的的回调addDep的方法
                 addDep 其实就是 给 dep.subs这个数组中的push一个watcher  

        当数据更新的时候 会触发对应的属性的set    set执行的时候 会触发 dep的notify方法
             dep的notify方法执行的是 其实就是循环事件池(dep.subs) 挨个执行这里边的watcher的update方法 来更新对应的视图