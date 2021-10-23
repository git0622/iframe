import axios from 'axios'
import { Toast } from 'vant';

// let str = localStorage.getItem('jz_vuex_state')
// let obj = str ? JSON.parse(str) : {}

var instance = axios.create({
  baseURL: process.env.NODE_ENV == 'production' ? 'http://47.99.134.126:7008' : '',
  timeout: 5000,
  // headers: { 'Authorization': obj.token }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 可以再请求拦截其中设置token
  let str = localStorage.getItem('jz_vuex_state')
  let obj = str ? JSON.parse(str) : {}
  console.log(config)
  config.headers.Authorization = obj.token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response.data)
  let { code, msg = "系统繁忙" } = response.data;
  if (code != 200) {
    Toast.fail(msg);
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default instance