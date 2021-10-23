import { A_ADDCOUNT } from './types'
let str = localStorage.getItem('qqq_www_eee');
let initData = str ? JSON.parse(str) : {
  Acount: 600
}
export default {
  namespaced: true,
  state: initData,
  mutations: {
    [A_ADDCOUNT](state) {
      localStorage.setItem('qqq_www_eee', JSON.stringify(state));
      console.log('A的changeCOunt')
    }
  },
  actions: {
    getData() {
      console.log('发送ajaz请求')
    }
  }
}