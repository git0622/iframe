import React from 'react';
import { connect } from 'react-redux'
import { loginAction } from '../store/actions/user'
import { Form, Input, Button, Checkbox } from 'antd';
import md5 from 'md5'
class Login extends React.Component {
  async login(params) {
    console.log(params)
    params.passwordMd5 = md5(params.passwordMd5)
    let data = await this.props.dispatch(loginAction(params))
    // console.log(data)
    if (data.resultCode == 200) {
      this.props.history.push('/')
      // window.location.reload()
      // window.location.href = process.env.NODE_ENV == 'development' ?
      //   "http://localhost:3001?11/#/introduce" :
      //   "https://baidu.com/?11#/introduce"
      // window.location.href = process.env.NODE_ENV == 'development' ?
      //   "http://localhost:3001/#/introduce" :
      //   "https://baidu.com/#/introduce"
    }
  }


  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return <div className=''>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={(...arg) => this.login(...arg)}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="passwordMd5"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </div>;
  }
}
Login = connect(() => ({}), dispatch => ({ dispatch }))(Login)
export default Login