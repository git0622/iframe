import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
export default [

  {
    key: '/',
    icon: AppstoreOutlined,
    title: "Dashbord",
    children: [
      {
        key: '/introduce',
        title: "系统介绍",
        icon: MenuUnfoldOutlined
      },
      {
        key: '/dashbord',
        title: "Dashbord",
        icon: MenuFoldOutlined
      },
      {
        key: '/add',
        title: "新增商品",
        icon: PieChartOutlined,
        level: 5
      }
    ]
  },
  {
    key: '/homeset',
    icon: DesktopOutlined,
    title: "首页设置",
    children: [
      {
        key: '/hot',
        title: "热销商品",
        icon: ContainerOutlined
      },
      {
        key: '/swiper',
        title: "轮播图设置",
        icon: MailOutlined
      },
      {
        key: '/qqq',
        title: 'qqqq',
        icon: ''
      }
    ]
  },
  {
    key: '/sysset',
    title: "系统设置",
    level: 20,
    icon: MailOutlined
  },

]