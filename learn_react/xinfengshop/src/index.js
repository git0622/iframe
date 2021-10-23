import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index'
import { Provider } from 'react-redux'
import store from './store/index'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import './index.scss'

moment.locale('zh-cn');

ReactDOM.render(<Provider store={store}>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>

</Provider>, document.getElementById('root'))