import React from 'react';
import { Table } from 'antd';
import { getData } from '../api/api'
const { Column } = Table;
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  }
  // {
  //   title: "操作",
  //   key: 'action',
  //   // render(...arg) {
  //   //   console.log(arg)
  //   //   return <button onClick={}>X</button>
  //   // }
  // }
];
let dataList = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     // key: i,
//     id: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
class Dashbord extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    current: 1,
    pageSize: 10,
    total: 46
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  componentDidMount() {
    getData({
      pageNumber: 1,
      pageSize: this.state.pageSize,
      configType: 3
    }).then(data => {
      // console.log(data)
      dataList = data.data.list
      this.setState({
        total: data.data.totalCount
      })
    })
    // getData({
    //   pageNumber: this.state.current,
    //   pageSize: this.state.pageSize,
    //   configType: 3
    // })
  }
  changePage = (n) => {
    this.setState({
      current: n
    })
    getData({
      pageNumber: n,
      pageSize: this.state.pageSize,
      configType: 3
    }).then(data => {
      // console.log(data)
      dataList = data.data.list
      this.setState({
        total: data.data.totalCount
      })
    })
  }
  del(obj) {
    console.log(obj)
  }
  render() {
    const { selectedRowKeys, current, pageSize, total } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: '奇数行',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: '偶数行',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return <Table
      rowSelection={rowSelection}
      dataSource={dataList}
      rowKey="goodsId"
      pagination={{
        current,
        pageSize,
        total,
        onChange: this.changePage
      }}
    >
      <Column
        title="姓名"
        key="configName"
        dataIndex="configName" />
      <Column
        title="年龄"
        key="configRank"
        dataIndex="configRank" />
      <Column
        title="地址"
        key="createTime"
        dataIndex="createTime" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => {
          // console.log(record)
          return (
            <>
              <a>Invite {record.lastName}</a>
              <a onClick={() => this.del(record)}>Delete</a>
            </>
          )
        }}
      />

    </Table>;
  }
}
export default Dashbord