import axios from 'axios'
import { Modal } from 'antd';
let str = localStorage.getItem("xinfengshangchengInfo")
let instance = axios.create({
  baseURL: process.env.NODE_ENV == 'production' ? 'http://backend-api-02.newbee.ltd' : '',
  timeout: 50000,
  headers: {
    token: str ? JSON.parse(str).token : ''
  }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let str = localStorage.getItem("xinfengshangchengInfo")
  config.headers.token = str ? JSON.parse(str).token : ''
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对相应失败的情况统一处理
  if (response.data.resultCode != 200) {
    Modal.error({
      title: '系统繁忙',
      content: response.data.message,
    });
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  Modal.error({
    title: '系统繁忙',
    content: '请稍后重试',
  });
  return Promise.reject(error);
});

export default instance