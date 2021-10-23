
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
/* 先根据权限 筛选出能展示的导航 */
export function filterPermission(ary, level) {
  // ary中放的是所有的导航配置
  let temp = [];// 用来存储符合渲染条件的哪些导航配置
  ary.forEach(item => {
    if (item.level && item.level > level) {
      // 用户权限不够
      // console.log("用户没有这个", item, '权限')
    } else {
      if (item.children) {
        item.children = filterPermission(item.children, level)
      }
      temp.push(item)
    }
  })

  return temp
}




export function renderTree(ary) {
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
        <Link to={item.key}>{item.title}</Link>

      </Menu.Item>
    }
  })
}