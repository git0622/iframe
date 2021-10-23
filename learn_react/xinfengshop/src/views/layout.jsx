import React from 'react';
import { Layout } from 'antd';
import '../scss/layout.scss'
// import * as sty from '../scss/layout.module.scss'
import Routes from '../router/routes'
import MyHeader from '../comonents/MyHeader'
import MyFooter from '../comonents/MyFooter'
import MySlider from '../comonents/MySlider'
const { Content } = Layout;
class Login extends React.Component {
  // className={sty['ant-layout']}
  render() {
    return <Layout className='ant-layout'>
      <MySlider>Sider</MySlider>
      <Layout>
        <MyHeader>Header</MyHeader>
        <Content><Routes /></Content>
        <MyFooter>Footer</MyFooter>
      </Layout>
    </Layout>
  }
}
export default Login