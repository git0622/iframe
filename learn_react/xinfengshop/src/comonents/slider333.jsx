import React from 'react';
import { Layout } from 'antd';
import '../scss/slider.scss'
import { Menu, Button } from 'antd';
import menu from '../router/menu'

/* 先根据权限 筛选出能展示的导航 */
function filterPermission(ary, level) {
  // ary中放的是所有的导航配置
  let temp = [];// 用来存储符合渲染条件的哪些导航配置
  ary.forEach(item => {
    if (item.level && item.level > level) {
      // 用户权限不够
      console.log("用户没有这个", item, '权限')
    } else {
      if (item.children) {
        item.children = filterPermission(item.children, level)
      }
      temp.push(item)
    }
  })

  return temp
}




function renderTree(ary) {
  return ary.map(item => {
    let Icon = item.icon
    if (item.children) {
      return <SubMenu
        key={item.key}
        icon={Icon ? <Icon /> : <></>}
        title={item.title}
      >
        {renderTree(item.children)}
      </SubMenu>
    } else {
      return <Menu.Item
        key={item.key}
        icon={Icon ? <Icon /> : <></>}
      >
        {item.title}
      </Menu.Item>
    }
  })
}

const { SubMenu } = Menu;
const { Sider } = Layout;



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

    let renderAry = filterPermission(menu, 15)
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
        {renderTree(renderAry)}
      </Menu>
    </Sider>

  }
}
export default MySilder