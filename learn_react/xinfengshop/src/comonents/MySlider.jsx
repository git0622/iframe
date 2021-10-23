import React from 'react';
import { Layout } from 'antd';
import '../scss/slider.scss'
import { Menu } from 'antd';
import menu from '../router/menu'
import { filterPermission, renderTree } from '../utils/nav'
import { withRouter } from 'react-router-dom'
const { Sider } = Layout;
function getOpenkeys(ary) {
  let temp = [];
  ary.forEach(item => {
    temp.push(item.key)
  });

  return temp
}
let renderAry = filterPermission(menu, 15)
let openKeys = getOpenkeys(renderAry);
class MySilder extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {


    return <Sider
      className='mySliderBox'
      collapsed={this.state.collapsed}>
      <h1 style={{ color: "#fff" }}>新蜂商城后台管理系统</h1>
      <Menu
        defaultOpenKeys={openKeys}
        selectedKeys={this.props.location.pathname}
        mode="inline"
        theme="dark"
      >
        {renderTree(renderAry)}
      </Menu>
    </Sider>

  }
}
MySilder = withRouter(MySilder)
export default MySilder