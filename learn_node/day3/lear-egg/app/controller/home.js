let { Controller } = require('egg')
class ListContoller extends Controller {
  async list() {
    console.log(666)
    this.ctx.body = {
      h: 123,
      w: 234
    }
  }
  async list2() {
    // this.ctx.body = {
    //   h: 12323234,
    //   w: 23423424
    // }
    let res = await this.ctx.curl('https://www.souyidai.com/soeasy/invest/fulllist', {
      method: 'post',
      data: {
        q: 123,
        w: 123
      },
      dataType: 'json'
    })
    console.log(res.data)
    await this.ctx.render('list123', {
      qqq: 123,
      str: '<b>qqqqqq</b>',
      ary: [1, 2, 3, 4]
    })
  }
}

module.exports = ListContoller