import React from 'react';
import { Layout } from 'antd';
import '../scss/slider.scss'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
let userLevel = 5
function MyNav(props) {
  let { key, icon, children, level, ...res } = props;
  return <>
    {
      userLevel >= level ? <Menu.Item key={key} icon={icon} {...res}>
        {children}
      </Menu.Item> : null
    }
  </>
}
class MySilder extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  /* 
    所有的导航展示问题：
      最简单：我们先把所有的导航都写上 然后根据根据判断条件老决定展示哪些导航
      高阶组件封装：把我们的判断都放到一个高阶组件当中
  
  
  */

  render() {
    return <Sider
      className='mySliderBox'
      collapsed={this.state.collapsed}>
      <h1 style={{ color: "#fff" }}>新蜂商城后台管理系统</h1>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {
          false ? <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item> : null
        }
        <MyNav level={3} key="2" icon={<DesktopOutlined />}> Option 2</MyNav>
        <MyNav level={4} key="2.2" icon={<DesktopOutlined />}> Option 2.2</MyNav>
        {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
          </Menu.Item> */}
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
          </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>

  }
}
export default MySilder