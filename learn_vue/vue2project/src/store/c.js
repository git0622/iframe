import { C_ADDCOUNT } from './types'
let q = 'wer'
export default {
  namespaced: true,
  state: {
    Ccount: 100,
    qqqq: 9999
  },
  mutations: {
    [C_ADDCOUNT](state, options) {
      console.log('c的changeCOunt')
      state.Ccount += options
    },
    q() { },
    [q]() { }
  }
}