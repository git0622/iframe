// jwt  json  web  token; 主要用来解决跨域身份验证的问题
// 用点 分割的 三个部分
//  header头部     payload 负载   Signature
//  头部 {alg:'hs256';}

let Koa = require('koa')
let Router = require('koa-router')
let bodyparser = require('koa-bodyparser')
let cors = require('@koa/cors')//  @koa/cors   (koa-static 用来起静态服务)
let jwt = require('jwt-simple');
let app = new Koa();
let router = new Router()
app.use(bodyparser())/// 主要处理请求体重的擦承诺书
app.use(async (ctx, next) => {
  // ctx.response.header['Access-Control-Allow-Origin'] = '*'
  ctx.set({
    'Access-Control-Allow-Origin': "*"
  })
  await next()
})
let secret = 'zhufeng'
router.post('/login', async (ctx) => {
  let { name, psw } = ctx.request.body;
  if (name == psw) {
    let token = jwt.encode(name, secret)
    ctx.body = {
      name,
      token
    }
  }
})

router.post('/list', async (ctx) => {
  // let token = ctx.get('mytoken') // 从请求头中获取token
  // console.log(ctx.request.body)
  let token = ctx.request.body.token // 从请求体中获取token
  let res = jwt.decode(token, secret)
  console.log(res)
  ctx.body = {
    code: 123,
  }
})
app.use(cors())
app.use(router.routes())


app.listen(4000, () => {
  console.log(4000)
})